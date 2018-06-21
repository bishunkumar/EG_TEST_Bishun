package pojo;


import com.google.gson.annotations.SerializedName;

public class ArticlesItem{

	@SerializedName("publishedAt")
	private String publishedAt;

	@SerializedName("author")
	private Object author;

	@SerializedName("urlToImage")
	private Object urlToImage;

	@SerializedName("description")
	private Object description;

	@SerializedName("source")
	private Source source;

	@SerializedName("title")
	private String title;

	@SerializedName("url")
	private String url;

	public void setPublishedAt(String publishedAt){
		this.publishedAt = publishedAt;
	}

	public String getPublishedAt(){
		return publishedAt;
	}

	public void setAuthor(Object author){
		this.author = author;
	}

	public Object getAuthor(){
		return author;
	}

	public void setUrlToImage(Object urlToImage){
		this.urlToImage = urlToImage;
	}

	public Object getUrlToImage(){
		return urlToImage;
	}

	public void setDescription(Object description){
		this.description = description;
	}

	public Object getDescription(){
		return description;
	}

	public void setSource(Source source){
		this.source = source;
	}

	public Source getSource(){
		return source;
	}

	public void setTitle(String title){
		this.title = title;
	}

	public String getTitle(){
		return title;
	}

	public void setUrl(String url){
		this.url = url;
	}

	public String getUrl(){
		return url;
	}
}