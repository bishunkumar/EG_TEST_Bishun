package utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;

public class GetHttpHit {
	private HttpResponseInterface delegate;
	private String url;
	String input="",responseString="";
	public GetHttpHit(String url, HttpResponseInterface delegate) {
		this.url = url;
		this.delegate = delegate;

	}

	public void execute() {
		try {

			HttpsURLConnection conn = null;
			URL url1 = new URL(url);
			conn = (HttpsURLConnection) url1.openConnection();
			SSLContext sc = SSLContext.getInstance("SSL");
			sc.init(null, new TrustManager[] { new TrustAnyTrustManager() }, new java.security.SecureRandom());

			conn.setSSLSocketFactory(sc.getSocketFactory());
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

			

			while ((input = br.readLine()) != null) {
				System.out.println(input);
				responseString=responseString+input;
			}
			br.close();
			System.out.println(responseString);
			delegate.getResult(responseString);
			

			/*
			 * HttpClient client = HttpClientBuilder.create().build(); //HttpGet request =
			 * new HttpGet(
			 * """
			 * ); HttpGet request = new HttpGet(url);
			 * 
			 * HttpResponse response = client.execute(request); HttpEntity entity =
			 * response.getEntity(); String responseString = EntityUtils.toString(entity,
			 * "UTF-8"); delegate.getResult(responseString);
			 */
			// responseString = responseString.trim();
		} catch (Exception e) {
			// TODO: handle exception
			delegate.getError("" + e);
		}
	}
}
