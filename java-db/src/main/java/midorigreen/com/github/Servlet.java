package midorigreen.com.github;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@WebServlet("/hello")
public class Servlet extends HttpServlet {

  private static final long serialVersionUID = -1742719209304656704L;

  private DataSource ds;

  @Override
  public void init() throws ServletException {
    HikariConfig conf = new HikariConfig("/db.properties");
    ds = new HikariDataSource(conf);
  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    try (Connection conn = ds.getConnection()) {
      DB db = new DB();
      List<String> names = db.fetch(conn);

      for (String name : names) {
        resp.getWriter().println(name);
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }
}