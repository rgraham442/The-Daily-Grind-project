package database;

import java.sql.SQLException;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import database.DBConnect;
@Path("/retrieve")
public class retrieveProduct {
	
	private DBConnect connect = new DBConnect();
		
	@GET
	@Path("/product/all")
	public String allProduct() throws SQLException {
		String searchAll = "SELECT * FROM product";
    	
    	try {
			connect.selectQuery(searchAll);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("Problem occurred at executeQuery operation : " + e);
			throw e;
		}
    	return connect.getJSON();
    }
    
	@GET
	@Path("/product/search/{productName}")
    public void searchProduct(@PathParam("productName") String productName) throws SQLException {
    	String searchByName = "SELECT * FROM product p WHERE p.name LIKE '%" + productName + "%';";
    	
    	try {
			connect.selectQuery(searchByName);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("Problem occurred at executeQuery operation : " + e);
			throw e;
		}
    	
    }
    
	@GET
	@Path("/product/coffee")
    public String searchAllCoffee() throws SQLException {
		String searchAllCoff = "SELECT * FROM product WHERE type='Coffee';";
    	
    	try {
			connect.selectQuery(searchAllCoff);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("Problem occurred at executeQuery operation : " + e);
			throw e;
		}
    	return connect.getJSON();
    }
	
	@GET
	@Path("/product/tea")
    public String searchAllTea() throws SQLException {
		String searchAllTe = "SELECT * FROM product WHERE type='Tea';";
    	
    	try {
			connect.selectQuery(searchAllTe);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("Problem occurred at executeQuery operation : " + e);
			throw e;
		}
    	return connect.getJSON();
    }
    
	@GET
	@Path("/product/equipment")
    public String searchAllEquipment() throws SQLException {
		String searchAllEquip = "SELECT * FROM product WHERE type='Equipment';";
    	
    	try {
			connect.selectQuery(searchAllEquip);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("Problem occurred at executeQuery operation : " + e);
			throw e;
		}
    	return connect.getJSON();
    }
    
	@POST
	@Path("/admin/add/{name}/{type}/{description}/{image}/{cost}/{stock}")
    public void addProduct(@PathParam("name")String name, @PathParam("type")String type, 
    		@PathParam("description")String description, @PathParam("image")String image, 
    		@PathParam("cost")int cost, @PathParam("stock")int stock) throws SQLException {
		String addProduct = "INSERT INTO product (name, stock, cost, type, description, image) VALUES  ('" + name + "', " + stock + 
				"," + cost + ", '" + type + ", '" + description + ", '" + image + "');";
    	
    	try {
			connect.updateQuery(addProduct);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("Problem occurred at executeQuery operation : " + e);
			throw e;
		}
    }
    
    @POST
	@Path("/admin/remove/{name}")
    public void deleteProduct(@PathParam("name") String name) throws SQLException {
		String deleteProduct = "DELETE FROM `thedailygrind`.`product` WHERE (`name` = " + name + ";";
    	
    	try {
			connect.updateQuery(deleteProduct);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("Problem occurred at executeQuery operation : " + e);
			throw e;
		}
    }
    
	@GET
	@Path("/admin/login/{username}")
	public String login(@PathParam("username") String username) throws SQLException {
		
		String sqlLogin = "SELECT * FROM member WHERE username ='" +username +"';";
		try {
			connect.selectLogin(sqlLogin);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("Problem occurred at executeQuery operation : " + e);
			throw e;
		}
				
		return connect.getJSON();
	}
}