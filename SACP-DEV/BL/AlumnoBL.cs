using System;
using System.Collections.Generic;
using SACP_DEV.DAL;
using SACP_DEV.BO;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace SACP_DEV.BL
{
    public class AlumnoBL
    {

        ListAlumnoDAL dal = new ListAlumnoDAL();
        public List<AlumnoBO> GetAlumnos(string Matricula, string Grupo, int? Status)
        {
            
            return dal.GetAlumnos(Matricula, Grupo, Status);
        }

        public List<SelectListItem> GetAlumnosSlct()
        {
            return dal.GetAlumnosSlt();
        }

        public List<SelectListItem> GetGroupSlct()
        {
            return dal.GetGroups();
        }

        public string DeleteUser(string user)
        {
            if (dal.DeleteUser(user))
            {
                return "OK";
            }else
            {
                return "Error";
            }
        }

        public string AddUser(string Matricula, string Name, string LastName, string Email, int Grupo, string Phone)
        {
            var ListGetAlumnos = dal.GetAlumnos(null, null, null);

            if(ListGetAlumnos.FindAll(x => x.ENROLLMENT ==  Matricula).Count > 0)
            {
                return "FOUND";
            }
            else
            {
                if (dal.AddUser(Matricula, Name, LastName, Email, Grupo, Phone))
                {
                    return "OK";
                }
                else
                {
                    return "Error";
                }
            }

            
        }

        public string UpdateUser(string Matricula, string Name, string LastName, string Email, int Grupo, string Phone)
        {
            if (dal.UpdateUser(Matricula, Name, LastName, Email, Grupo, Phone))
            {
                return "OK";
            }
            else
            {
                return "Error";
            }
        }

    }
}
