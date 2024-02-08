using KneeSurgeryGuide.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace KneeSurgeryGuide.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculator()
        {
            return View();
        }
    }
}
