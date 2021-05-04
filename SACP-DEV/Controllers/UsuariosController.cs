using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SACP_DEV.BL;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SACP_DEV.Controllers
{
    public class UsuariosController : Controller
    {
        AlumnoBL bl = new AlumnoBL();
        UserBL blUser = new UserBL();

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }


        public IActionResult Alumno()
        {

            ViewBag.AlumnosSLCT =  bl.GetAlumnosSlct();
            ViewBag.GroupSlct = bl.GetGroupSlct();
            return View();
        }

        public IActionResult NuevoAlumno()
        {
            ViewBag.GroupSlct = bl.GetGroupSlct();
            return View();
        }

        public IActionResult NuevoUsuario()
        {
            return View();
        }

        public IActionResult GetAlumno(string Matricula, string Grupo, int? Status)
        {
            var list = bl.GetAlumnos(Matricula, Grupo, Status);
            return Json(list );
        }

        public IActionResult DeleteUser(string User)
        {
            var result = bl.DeleteUser(User);
            return Json(result);
        }


        public IActionResult AddUser(string Matricula, string Name, string LastName, string Email, int Grupo, string Phone)
        {
            var Result = bl.AddUser(Matricula, Name, LastName, Email, Grupo, Phone);
            return Json(Result);
        }

        public IActionResult UpdateUser(string Matricula, string Name, string LastName, string Email, int Grupo, string Phone)
        {
            var Result = bl.UpdateUser(Matricula, Name, LastName, Email, Grupo, Phone);
            return Json(Result);
        }



        public IActionResult GetUser(int? Status)
        {
            var list = blUser.GetUsers(Status);
            return Json(list);
        }

        public IActionResult DeleteUserApp(int Userid)
        {
            return Json(blUser.DeleteUser(Userid));
        }

        public IActionResult UpdateUserApp(int Userid, string Name, string LastName, string Email, string Password, int typeUser, int? Status)
        {
            return Json(blUser.UpdateUser(Userid, Name, LastName, Email, Password, typeUser, Status));
        }

        public IActionResult AddUserApp(string Name, string LastName, string Email, int Type, string Password)
        {
            return Json(blUser.AddUser(Name, LastName, Email, Type, Password));
        }
    }
   
}
