using System;
using System.Data;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using SACP_DEV.BO;
using SACP_DEV.BO.Constant;

namespace SACP_DEV.DAL
{
    public class PrestamoDAL
    {
        private ConnectionDB conn = ConnectionDB.GetInstance();


        public List<GetProductoPrestamos> GetProduct(int Marbete)
        {
            string sSp = SQL.GET_PRODUCT;
            List<GetProductoPrestamos> Model = new List<GetProductoPrestamos>();
            using (var cmd = conn.CreateProcedure(sSp))
            {
                cmd.Parameters.AddWithValue("@IN_MARBETE", Marbete);
                
                MySqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Model.Add(new GetProductoPrestamos()
                    {
                        Id = (int)rdr[0],
                        Product = (string) rdr[1],
                        Description =  (string)rdr[2],
                        Photo = (string)rdr[3]
                    });
                }
                rdr.Close();
            }
            return Model;
        }
    


    }
}
