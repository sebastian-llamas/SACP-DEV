using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SACP_DEV.Models;

namespace SACP_DEV.Controllers
{
    public class HomeController : Controller
    {
        private DataContext db = new DataContext();

        public IActionResult Index()
        {

            //ViewBag.types = db.Users_Types.ToList();
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

       public IActionResult Login()
        {
            return View();
        }
    }
}
