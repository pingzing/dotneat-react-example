using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DotNeat.React.Controllers
{
    [ApiController]
    public class PingController : Controller
    {
        /// <summary>
        /// Always returns 200 OK.
        /// </summary>
        [HttpGet]
        [Route("/ping")]
        public ActionResult Ping() => Ok();
    }
}
