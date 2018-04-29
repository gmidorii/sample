package midorigreen.com.github;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        HikariConfig conf = new HikariConfig("/db.properties");
        DataSource ds = new HikariDataSource(conf);

        try (Connection conn = ds.getConnection()) {
            DB db = new DB();
            System.out.println(db.fetch(conn));
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
