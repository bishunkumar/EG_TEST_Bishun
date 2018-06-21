package com.org.aem.core.servlets;

import java.io.IOException;
import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import utils.APIConstants;
import utils.GetHttpCall;

@SlingServlet(paths="/bin/newsAPI", methods = "GET", metatype=true)
public class NewsServlet extends SlingSafeMethodsServlet{
	String responseString,url;
	@Reference
	private ResourceResolverFactory resolverFactory;
	 private static final Logger logger = LoggerFactory.getLogger(NewsServlet.class);
	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		//super.doPost(request, response);
		 logger.error("BISHUNNN CALLED");
		String  category = request.getParameter("category").trim();
		GetHttpCall getHttpCall = new GetHttpCall();
		url = APIConstants.baseURL+category.toLowerCase();
		responseString = getHttpCall.execute(url);
		response.getWriter().write(responseString);
	}
	

}
