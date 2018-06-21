package utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.net.ssl.TrustManager;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.day.cq.mailer.MessageGateway;
import com.day.cq.mailer.MessageGatewayService;

public class MainClass {

	public static void main(String[] arg) {

		/*
		 * RandomString randomString = new RandomString(4); randomString.nextString();
		 * System.out.println(randomString.nextString());
		 */

		/*
		 * Calendar cal = Calendar.getInstance(); cal.add(Calendar.DATE, -7);
		 * 
		 * SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd"); String
		 * strDate= formatter.format(cal.getTime()); System.out.println("Date = "+
		 * strDate);
		 */

		// Declare a MessageGateway service
		/*
		 * MessageGateway<Email> messageGateway;
		 * 
		 * // Set up the Email message Email email = new SimpleEmail();
		 * 
		 * email.setHostName("smtp.googlemail.com"); email.setSmtpPort(465);
		 * email.setSSL(true); email.setAuthentication("testtrainingmagnon@gmail.com",
		 * "M@gn0ntbwa");
		 * 
		 * // Set the mail values String emailToRecipients =
		 * "bishun.kumar@magnon-egplus.com";
		 * 
		 * try { email.addTo(emailToRecipients); email.setSubject("AEM Custom Step");
		 * email.setFrom("bishun.kumar@magnon-egplus.com");
		 * //email.setContent(aMimeMultipart); email.
		 * setContent("<p>This message is to inform you that the CQ Home page created. Use below credential for opening page</p>"
		 * + "<b>UserName:</b> traininguser <br>"+ "<b>Password:</b> user@1234 <br>"+
		 * "<b>Path:</b>http://52.221.39.146:4502/html"+ "</br></br></br></br>"+
		 * "<b>Regards:</b></br> Bishun Kumar<br>","text/html; charset=utf-8");
		 * email.send(); } catch (EmailException e) { // TODO Auto-generated catch block
		 * System.out.println("BISHNUUUUUUUU"+e); e.printStackTrace(); }
		 */

		
		String url ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f5227d7002ef45d889976bc0f6708628";
		new GetHttpHit(url, responseInterface).execute();

			

	}
	
	static HttpResponseInterface responseInterface = new HttpResponseInterface() {
		@Override
		public void getResult(String result) {
			// TODO Auto-generated method stub
			System.out.println(result);
		}
		
		@Override
		public void getError(String error) {
			// TODO Auto-generated method stub
			System.out.println("Error"+error);
		}
	};
	
	

}
