package pojo;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class ProductPOJO {

@SerializedName("ProductId")
@Expose
private String productId;
@SerializedName("ProductName")
@Expose
private String productName;

public String getProductId() {
return productId;
}

public void setProductId(String productId) {
this.productId = productId;
}

public String getProductName() {
return productName;
}

public void setProductName(String productName) {
this.productName = productName;
}

}
