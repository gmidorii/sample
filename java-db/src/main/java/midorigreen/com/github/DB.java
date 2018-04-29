package midorigreen.com.github;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.management.RuntimeErrorException;


public class DB {

  public DB() {
  }

  public List<String> fetch(Connection conn) {
    try {
      PreparedStatement ps =  conn.prepareStatement("SELECT name FROM t_user_info");
      ResultSet rs = ps.executeQuery();
      List<String> names = new ArrayList<>();
      while(rs.next()) {
        names.add(rs.getString("name"));
      }

      return names;
    } catch (Exception e) {
      e.printStackTrace();
      throw new RuntimeException(e.toString());
    }
  }
}