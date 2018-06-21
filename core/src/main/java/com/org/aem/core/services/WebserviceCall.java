package com.org.aem.core.services;

import java.util.ArrayList;
import java.util.Arrays;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Service;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.google.gson.Gson;

import pojo.ProductPOJO;
import utils.HttpResponseInterface;

@Component

@Service
public class WebserviceCall implements WebserviceResponse{

	@Override
	public ArrayList<ProductPOJO> getProducts() {
		// TODO Auto-generated method stub
		ArrayList<ProductPOJO> productPOJOs = new ArrayList<ProductPOJO>();
		try {
		HttpClient client = HttpClientBuilder.create().build();
		//HttpGet request = new HttpGet("URL");
		HttpGet request = new HttpGet("");
		
		HttpResponse response = client.execute(request);
		HttpEntity entity = response.getEntity();
		String responseString = EntityUtils.toString(entity, "UTF-8");
		responseString = responseString.trim();
		 Gson gson = new Gson();
		ProductPOJO[] product = gson.fromJson(responseString, ProductPOJO[].class);
		productPOJOs = new ArrayList<ProductPOJO>(Arrays.asList(product));
		System.out.println(responseString);
		}catch (Exception e) {
			// TODO: handle exception
		}
		return productPOJOs;
	}


}
