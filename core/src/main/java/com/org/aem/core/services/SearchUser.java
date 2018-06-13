package com.org.aem.core.services;

import java.util.ArrayList;

import com.org.aem.core.models.PagePOJO;
import com.org.aem.core.models.UserPOJO;

public interface SearchUser {
	public ArrayList<UserPOJO>  getUsers(ArrayList<UserPOJO> userPOJO);
	public ArrayList<PagePOJO>  getPages(ArrayList<PagePOJO> pagePOJO);
	public String  getMag();

}
