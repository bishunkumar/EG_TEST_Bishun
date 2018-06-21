package utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

public class GetHttpCall {

	String responseString = "";
	private String input;

	public String execute(String url) {
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

			// responseString = responseString.trim();
		} catch (Exception e) {
			// TODO: handle exception
			responseString = "error" + e;
		}

		return responseString;
	}
}
