using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SACP_DEV.BL;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SACP_DEV.Controllers
{
    public class PrestamosController : Controller
    {
        AlumnoBL bl = new AlumnoBL();

        PrestamoBL PBl = new PrestamoBL();
        // GET: /<controller>/
        public IActionResult Index()
        {
            ViewBag.AlumnosSLCT = bl.GetAlumnosSlct();
            return View();
        }

        public IActionResult HistorialPrestamos()
        {
            return View();
        }

        public IActionResult PrestamoActivos()
        {
            return View();
        }

        public IActionResult GetPrestamo(int Marbete)
        {
            return Json(PBl.GetPrestamo(Marbete));
        }
    }
}
