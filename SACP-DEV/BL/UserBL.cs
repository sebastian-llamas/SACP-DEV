using System;
using System.Collections.Generic;
using SACP_DEV.DAL;
using SACP_DEV.BO;

namespace SACP_DEV.BL
{
    public class UserBL
    {
        ListUser dal = new ListUser();

        public List<UserBO> GetUsers(int? Status)
        {
            return dal.GetUser(Status);
        }

        public string UpdateUser(int Userid, string Name, string LastName, string Email, string Password, int typeUser, int? Status)
        {
            if (dal.UpdateUser(Userid, Name, LastName, Email, Password, typeUser, Status))
            {
                return "OK";
            }
            return "Error";
        }

        public string DeleteUser(int Userid)
        {
            if (dal.DeleteUser(Userid))
            {
                return "OK";
            }
            return "Error";
        }



        public string AddUser(string Name, string LastName, string Email, int Type, string Password)
        {
            if(dal.AddUserApp(Name, LastName, Email, Type, Password))
            {
                return "OK";
            }
            return "Error";
        }
    }
}
