package com.org.aem.core.servlets;

import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;

import javax.jcr.Node;
import javax.jcr.Session;
import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.jackrabbit.commons.JcrUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import utils.RandomString;

@SlingServlet(paths="/bin/submitDataBishun", methods = "POST", metatype=true)
public class SaveValesServlet extends SlingAllMethodsServlet{
	String name, email, phone, address, city, explain;
	@Reference
	private ResourceResolverFactory resolverFactory;
	 private static final Logger logger = LoggerFactory.getLogger(SaveValesServlet.class);
	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		//super.doPost(request, response);
		 logger.error("BISHUNNN CALLED");
		this.name = request.getParameter("Name").trim();
		this.email = request.getParameter("Email").trim();
		this.phone = request.getParameter("Phone").trim();
		this.address = request.getParameter("Address").trim();
		this.city = request.getParameter("City").trim();
		this.explain = request.getParameter("Explain").trim();
		String values = saveNode();
		response.getWriter().write(values);
	}
	
	
	 String saveNode() {
		 String error="";
		 Session session = null;
		 logger.error("BISHUNNN saveNode");
			Map<String,Object> userMap = new HashMap<String,Object>();
			userMap.put(ResourceResolverFactory.SUBSERVICE, "bishunsystemuser");
			try {
				logger.error("BISHUNNN SYSTEM USER");
			ResourceResolver resolver = resolverFactory.getServiceResourceResolver(userMap);
			if(resolver!=null)
			 session = resolver.adaptTo(Session.class);
			
			 Node root = session.getRootNode(); 
			 Node userNode = root.getNode("content/training/bishun"); 
			 error="1";
			 //Node userNode = root.getNode("content/training/bishun/users"); 
			//	int isAvail = doesNodeExist(userNode);
				Node userNode1=null;
				
				if(userNode.hasNode("customers")) {
					error="true";
					userNode1 = userNode.getNode("customers");
					error="true1";}
				else {
					error="false";
					userNode1 = userNode.addNode("customers","sling:OrderedFolder");
					error="false1";	
				}
				
			/* if(isAvail==-1)
				 userNode1 = userNode.addNode("customers","sling:OrderedFolder");
			 else
				 userNode1 = userNode.getNode("costomers"); */
			 error="3";
			 Node newNode1 = userNode1.addNode(name,"nt:unstructured");
			 RandomString randomString = new RandomString(4);
			 newNode1.setProperty("ID",randomString.nextString()); 
			 newNode1.setProperty("Name", name); 
			 newNode1.setProperty("Email", name); 
			 newNode1.setProperty("Phone", phone); 
			 newNode1.setProperty("Address", address); 
			 newNode1.setProperty("City", city); 
			 newNode1.setProperty("Details", explain); 
			 logger.error("BISHUNNN saveNode");
			 error="4";
			 session.save(); 
			 session.logout();
			}catch (Exception e) {
				// TODO: handle exception
				return "Error:::--->"+e+error;
			}
			 
		return "Saved";
	}

}
