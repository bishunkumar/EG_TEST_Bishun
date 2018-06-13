package utils;

public class MainClass {

	public static void main(String[] arg) {
		
		RandomString randomString = new RandomString(4);
		randomString.nextString();
		System.out.println(randomString.nextString());
	}
}
