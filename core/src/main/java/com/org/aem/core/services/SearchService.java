package com.org.aem.core.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import javax.jcr.Session;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.search.result.SearchResult;
import com.org.aem.core.models.PagePOJO;
import com.org.aem.core.models.UserPOJO;

@Component
@Service
//@Service(value = SearchUser.class)
public class SearchService implements SearchUser {

	@Reference
	private ResourceResolverFactory resolverFactory;

	@Reference
	private QueryBuilder builder;
	private static final Logger logger = LoggerFactory.getLogger(SearchService.class);

	ArrayList<UserPOJO> userData = new ArrayList<UserPOJO>();
	ArrayList<PagePOJO> pageData = new ArrayList<PagePOJO>();
	private String error;
	
	
	@Override
	public ArrayList<UserPOJO> getUsers(ArrayList<UserPOJO> userPOJO) {
		// TODO Auto-generated method stub
		Session session = null;
		Map<String, Object> userMap = new HashMap<String, Object>();
		userMap.put(ResourceResolverFactory.SUBSERVICE, "bishunsystemuser");
		logger.error("BISHUNNNN CALLED 1");
		try {
			ResourceResolver resolver = resolverFactory.getServiceResourceResolver(userMap);
			if (resolver != null)
				session = resolver.adaptTo(Session.class);
			Map<String, String> map = new HashMap<String, String>();

			logger.error("BISHUNNNN CALLED 2");
			map.put("path", "/content/training/bishun/customers/");
			map.put("type", "nt:unstructured");

			Query query = builder.createQuery(PredicateGroup.create(map), session);
			query.setStart(0);
			query.setHitsPerPage(20);
			SearchResult result = query.getResult();
			logger.error("BISHUNNNN CALLED 3");
			
			for (Hit hit : result.getHits()) {
				UserPOJO user = new UserPOJO();
				ValueMap valueMap = hit.getProperties();
				logger.error("BISHUNNNN CALLED 4");
				user.setName(valueMap.get("ID").toString());
				user.setName(valueMap.get("Name").toString());
				user.setEmail(valueMap.get("Email").toString());
				user.setPhone(valueMap.get("Phone").toString());
				user.setAddress(valueMap.get("Address").toString());
				user.setCity(valueMap.get("City").toString());
				user.setDetails(valueMap.get("Details").toString());

				userData.add(user);
			}

			session.logout();
		} catch (Exception e) {
			logger.error("BISHUNNNN", "" + e);
			error="BISHUNNNN" + e;
			return null;
		}
		return userData;
	}
	@Override
	public ArrayList<PagePOJO> getPages(ArrayList<PagePOJO> pagePOJO) {
		// TODO Auto-generated method stub
		Session session = null;
		Map<String, Object> userMap = new HashMap<String, Object>();
		userMap.put(ResourceResolverFactory.SUBSERVICE, "bishunsystemuser");
		logger.error("BISHUNNNN CALLED 1");
		try {
			ResourceResolver resolver = resolverFactory.getServiceResourceResolver(userMap);
			if (resolver != null)
				session = resolver.adaptTo(Session.class);
			Map<String, String> map = new HashMap<String, String>();

			logger.error("BISHUNNNN CALLED 2");
			map.put("path", "/content/");
			map.put("type", "cq:Page");
			map.put("orderby", "@jcr:content/cq:lastModified");

			Query query = builder.createQuery(PredicateGroup.create(map), session);
			//query.setStart(0);
			//query.setHitsPerPage(20);
			SearchResult result = query.getResult();
			logger.error("BISHUNNNN CALLED 3");
			
			for (Hit hit : result.getHits()) {
				PagePOJO pagePojo = new PagePOJO();
				ValueMap valueMap = hit.getProperties();
				logger.error("BISHUNNNN CALLED 4");
				pagePojo.setTitle(valueMap.get("jcr:title").toString());
				pagePojo.setPath(hit.getPath());
				pagePojo.setLastModified(valueMap.get("cq:lastModified").toString());
				pageData.add(pagePojo);
			}

			session.logout();
		} catch (Exception e) {
			logger.error("BISHUNNNN", "" + e);
			error="BISHUNNNN" + e;
			return null;
		}
		return pageData;
	}
	@Override
	public String getMag() {
		// TODO Auto-generated method stub
		return error;
	}

}
