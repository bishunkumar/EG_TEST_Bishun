package com.org.aem.core.services;

import java.util.ArrayList;

import com.org.aem.core.models.PagePOJO;
import com.org.aem.core.models.UserPOJO;

public interface SearchUser {
	public ArrayList<UserPOJO>  getUsers();
	public ArrayList<PagePOJO>  getPages();
	public String  getMag();

}
