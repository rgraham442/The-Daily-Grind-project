package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class DBConnect {

    private static final String DB_URL = "jdbc:mysql://localhost:3306/thedailygrind"
    		+ "?useSSL=false&useLegacyDatetimeCode=false&serverTimezone=UTC"
    		+ "&allowPublicKeyRetrieval=true";
    private static final String USER = "connector";
    private static final String PASS = "password";
    private static Connection conn = null;
    
    private Statement stmt = null;
    private ResultSet rs = null;
    
    private JSONArray json;

    public static void connection() throws SQLException, ClassNotFoundException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("JDBC Driver not found");
            e.printStackTrace();
            throw e;
        }

        System.out.println("Connecting to database...");
        try {
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
        } catch (SQLException e) {
            System.out.println("Connection Failed! Check output console" + e);
            e.printStackTrace();
            throw e;
        }
    }

    public static void disconnect() throws SQLException {
        try {
            if (conn != null && !conn.isClosed()) {
                conn.close();
            }
        } catch (Exception e){
            throw e;
        }
    }

	public void selectQuery (String statementQuery) throws SQLException, ClassNotFoundException, JSONException {

    	json = new JSONArray();
    	
        try {
            connection();
            stmt = conn.createStatement();

            rs = stmt.executeQuery(statementQuery);
            java.sql.ResultSetMetaData rsmd = rs.getMetaData();
            int numColumns = rsmd.getColumnCount();
               
            while (rs.next()) {
            	JSONObject obj = new JSONObject();
            
            	for (int i = 1; i < numColumns + 1; i++) {
            		String columnName = rsmd.getColumnName(i);
            		
            		if (rsmd.getColumnType(i) == java.sql.Types.VARCHAR) {
                        obj.put(columnName, rs.getString(i));
            		} else if (rsmd.getColumnType(i) == java.sql.Types.INTEGER) {
                        obj.put(columnName, rs.getInt(i));
            		}
            		
            	}
            	json.put(obj);
            }
        } catch (SQLException e) {
            System.out.println("Problem occurred at executeQuery operation : " + e);
            throw e;
        }catch (JSONException e) {
            	e.printStackTrace();
            }
        finally {
        	if (rs != null) {
                rs.close();
            }
            if (stmt != null) {
                stmt.close();
            }
            disconnect();
        }
        
    }

    public void updateQuery(String query) throws SQLException, ClassNotFoundException {
        Statement stmt = null;
        try {
            connection();
            stmt = conn.createStatement();
            stmt.executeUpdate(query);

        } catch (SQLException e) {
            System.out.println("Problem occurred at update operation : " + e);
            throw e;
        } finally {
            if (stmt != null) {
                stmt.close();
            }
            disconnect();
        }

    }
    
    public String getJSON() {
    	return json.toString();
    }
    
    public void selectLogin (String statementQuery) throws SQLException, ClassNotFoundException, JSONException {

    	json = new JSONArray();
    	
        try {
            connection();
            stmt = conn.createStatement();

            rs = stmt.executeQuery(statementQuery);
            java.sql.ResultSetMetaData rsmd = rs.getMetaData();
            int numColumns = rsmd.getColumnCount();
               
            while (rs.next()) {
            	JSONObject obj = new JSONObject();
            
            	for (int i = 1; i < numColumns + 1; i++) {
            		String columnName = rsmd.getColumnName(i);
            		
            		if (rsmd.getColumnType(i) == java.sql.Types.VARCHAR) {
                        obj.put(columnName, rs.getString(i));
            		}
            		
            	}
            	json.put(obj);
            }
        } catch (SQLException e) {
            System.out.println("Problem occurred at executeQuery operation : " + e);
            throw e;
        }catch (JSONException e) {
            	e.printStackTrace();
            }
        finally {
        	if (rs != null) {
                rs.close();
            }
            if (stmt != null) {
                stmt.close();
            }
            disconnect();
        }
        
    }
}