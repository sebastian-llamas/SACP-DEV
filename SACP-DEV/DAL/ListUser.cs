using System;
using System.Data;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using SACP_DEV.BO;
using SACP_DEV.BO.Constant;
namespace SACP_DEV.DAL
{
    public class ListUser
    {
        private ConnectionDB conn = ConnectionDB.GetInstance();



        public List<UserBO> GetUser(int? Status)
        {
            string sSp = SQL.GET_USER_APP;
            List<UserBO> Model = new List<UserBO>();
            using (var cmd = conn.CreateProcedure(sSp))
            {   
                cmd.Parameters.AddWithValue("@IN_STATUS", Status);
                MySqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Model.Add(new UserBO()
                    {

                        Id = (int)rdr[0],
                        Name = (string)rdr[1],
                        LastName = (string)rdr[2],
                        FullName = (string)rdr[3],
                        Email = (string)rdr[4],
                        TypeUser = (int)rdr[5],
                        NameType = (string)rdr[6],
                        NameStatus =(string)rdr[7],
                        Status = (int)rdr[8],
                        Created_by = (string)rdr[9],
                        Created_on = rdr[10].ToString()
                    });
                }
                rdr.Close();
            }
            return Model;
        }


        public bool UpdateUser(int Userid, string Name, string LastName, string Email, string Password, int typeUser, int? Status)
        { 
            string sSp = SQL.UPDATE_USER_APP;
            try
            {
                using (var cmd = conn.CreateProcedure(sSp))
                {
                    cmd.Parameters.AddWithValue("@IN_USER_ID", Userid);
                    cmd.Parameters.AddWithValue("@IN_NAME", Name);
                    cmd.Parameters.AddWithValue("@IN_LAST_NAME", LastName);
                    cmd.Parameters.AddWithValue("@IN_EMAIL", Email);
                    cmd.Parameters.AddWithValue("@IN_PASSWORD", Password);
                    cmd.Parameters.AddWithValue("@IN_PHOTO", "-");
                    cmd.Parameters.AddWithValue("@IN_TYPE_USER", typeUser);
                    cmd.Parameters.AddWithValue("@IN_STATUS", Status);
                    cmd.Parameters.AddWithValue("@IN_USER", 1);
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    rdr.Close();
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }


        public bool DeleteUser(int Userid)
        {
            string sSp = SQL.DELETE_USER_APP;
            try
            {
                using (var cmd = conn.CreateProcedure(sSp))
                {
                    cmd.Parameters.AddWithValue("@IN_USER_ID", Userid);
                    cmd.Parameters.AddWithValue("@IN_USER", 1);
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    rdr.Close();
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool AddUserApp(string Name, string LastName, string Email, int Type, string Password)
        {
            string sSp = SQL.ADD_USER_APP;
            try
            {
                using (var cmd = conn.CreateProcedure(sSp))
                {
                    cmd.Parameters.AddWithValue("@IN_NAME", Name);
                    cmd.Parameters.AddWithValue("@IN_LAST_NAME", LastName);
                    cmd.Parameters.AddWithValue("@IN_EMAIL", Email);
                    cmd.Parameters.AddWithValue("@IN_PHOTO", "-");
                    cmd.Parameters.AddWithValue("@IN_TYPE", Type);
                    cmd.Parameters.AddWithValue("@IN_PASSWORD", Password);
                    cmd.Parameters.AddWithValue("@IN_USER", 1);
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    rdr.Close();
                }
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
