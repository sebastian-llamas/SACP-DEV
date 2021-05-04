using System;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Configuration;

namespace SACP_DEV.DAL
{
    public class ConnectionDB
    {

        private string connString = "server=127.0.0.1;port=8889;user=root;password=root;database=SACP";
        public MySql.Data.MySqlClient.MySqlConnection conn;

        public static ConnectionDB GetInstance()
        {
            return new ConnectionDB();
        }
        private ConnectionDB()
        {
            
            this.conn = new MySql.Data.MySqlClient.MySqlConnection();
            SetConnection();
        }


        public void SetConnection()
        {
            this.conn.ConnectionString = connString;
            conn.Open();
        }



        public MySqlCommand CreateProcedure( string NameProcedure)
        {
            MySqlCommand cmd = new MySqlCommand(NameProcedure, this.conn );
            cmd.CommandType = CommandType.StoredProcedure;
            return cmd;
        }
    }
}
