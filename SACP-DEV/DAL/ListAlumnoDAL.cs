using System;
using System.Data;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using SACP_DEV.BO;
using SACP_DEV.BO.Constant;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace SACP_DEV.DAL
{
    public class ListAlumnoDAL
    {
        private ConnectionDB conn = ConnectionDB.GetInstance();

        public List<AlumnoBO> GetAlumnos(string Matricula, string Grupo, int? Status)
        {
            string sSp = SQL.GET_USER;

            List<AlumnoBO> Model = new List<AlumnoBO>();
            using (var cmd = conn.CreateProcedure(sSp))
            {
                cmd.Parameters.AddWithValue("@IN_ENROLLMENT", Matricula);
                cmd.Parameters.AddWithValue("@IN_GROUP", Grupo);
                cmd.Parameters.AddWithValue("@IN_STATUS", Status);
                MySqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Model.Add(new AlumnoBO()
                    {

                        ENROLLMENT = (string)rdr[0],
                        NAME = (string)rdr[1],
                        FULLNAME = (string)rdr[2],
                        LAST_NAME = (string)rdr[3],
                        EMAIL = (string)rdr[4],
                        PHONE = (string)rdr[5],
                        GRADE = (string)rdr[6],
                        CREATED_BY  = (string)rdr[7],
                        CREATED_ON = rdr[8].ToString()
                    });
                }
                rdr.Close();
            }
            return Model;
        }


        public List<SelectListItem> GetAlumnosSlt()
        {
            string sSp = SQL.GET_USER_SELECT;
            List<SelectListItem> Model = new List<SelectListItem>();
            using (var cmd = conn.CreateProcedure(sSp))
            {
               
                MySqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Model.Add(new SelectListItem()
                    {
                        Value = (string)rdr[0],
                        Text = (string)rdr[1]
                    });
                }
                rdr.Close();
            }
            return Model;
        }

        public List<SelectListItem> GetGroups ()
        {
            string sSp = SQL.GET_GROUP;
            List<SelectListItem> Model = new List<SelectListItem>();
            using (var cmd = conn.CreateProcedure(sSp))
            {
                cmd.Parameters.AddWithValue("@IN_TURN", null);
                cmd.Parameters.AddWithValue("@STATUS", null);
                MySqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Model.Add(new SelectListItem()
                    {
                        Value = rdr[0].ToString(),
                        Text = (string)rdr[1]
                    });
                }
                rdr.Close();
            }
            return Model;
        }

        public bool DeleteUser(string user)
        {
            string sSp = SQL.DELETE_USER;
            try
            {
                using (var cmd = conn.CreateProcedure(sSp))
                {
                    cmd.Parameters.AddWithValue("@IN_ID_USER", user);
                    cmd.Parameters.AddWithValue("@IN_USER", 1);
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    rdr.Close();
                }
                return true;
            }
            catch (Exception )
            {
                return false;
            }
        }


        public bool AddUser(string Matricula, string Name, string LastName, string Email, int Grupo, string Phone )
        {
            string sSp = SQL.ADD_USER;
            try
            {
                using (var cmd = conn.CreateProcedure(sSp))
                {
                    cmd.Parameters.AddWithValue("@IN_MATRICULA", Matricula);
                    cmd.Parameters.AddWithValue("@IN_NAME", Name);
                    cmd.Parameters.AddWithValue("@IN_LAST_NAME", LastName);
                    cmd.Parameters.AddWithValue("@IN_EMAIL", Email);
                    cmd.Parameters.AddWithValue("@IN_PHONE", Phone);
                    cmd.Parameters.AddWithValue("@IN_PHOTO", "-");
                    cmd.Parameters.AddWithValue("@IN_GROUP", Grupo);
                    cmd.Parameters.AddWithValue("@IN_TYPE", 1);
                    cmd.Parameters.AddWithValue("@IN_TUTOR", 1);
                    cmd.Parameters.AddWithValue("@IN_USER", 1);
                    MySqlDataReader rdr = cmd.ExecuteReader();
                    rdr.Close();
                }
                return true;
            }
            catch (Exception )
            {
                return false;
            }
        }

        public bool UpdateUser(string Matricula, string Name, string LastName, string Email, int Grupo, string Phone)
        {
            string sSp = SQL.UPDATE_USER;
            try
            {
                using (var cmd = conn.CreateProcedure(sSp))
                {
                    cmd.Parameters.AddWithValue("@IN_MATRICULA", Matricula);
                    cmd.Parameters.AddWithValue("@IN_NAME", Name);
                    cmd.Parameters.AddWithValue("@IN_LAST_NAME", LastName);
                    cmd.Parameters.AddWithValue("@IN_EMAIL", Email);
                    cmd.Parameters.AddWithValue("@IN_PHONE", Phone);
                    cmd.Parameters.AddWithValue("@IN_PHOTO", "-");
                    cmd.Parameters.AddWithValue("@IN_GROUP", Grupo);
                    cmd.Parameters.AddWithValue("@IN_TYPE", 1);
                    cmd.Parameters.AddWithValue("@IN_TUTOR", 1);
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
