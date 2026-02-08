using Microsoft.AspNetCore.Mvc;
using MergingtonHighSchoolAPI.Models;

namespace MergingtonHighSchoolAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivitiesController : ControllerBase
    {
        // In-memory activity database
        private static readonly Dictionary<string, Activity> _activities = new()
        {
            {
                "Chess Club", new Activity
                {
                    Description = "Learn strategies and compete in chess tournaments",
                    Schedule = "Fridays, 3:30 PM - 5:00 PM",
                    MaxParticipants = 12,
                    Participants = new List<string> { "michael@mergington.edu", "daniel@mergington.edu" }
                }
            },
            {
                "Programming Class", new Activity
                {
                    Description = "Learn programming fundamentals and build software projects",
                    Schedule = "Tuesdays and Thursdays, 3:30 PM - 4:30 PM",
                    MaxParticipants = 20,
                    Participants = new List<string> { "emma@mergington.edu", "sophia@mergington.edu" }
                }
            },
            {
                "Gym Class", new Activity
                {
                    Description = "Physical education and sports activities",
                    Schedule = "Mondays, Wednesdays, Fridays, 2:00 PM - 3:00 PM",
                    MaxParticipants = 30,
                    Participants = new List<string> { "john@mergington.edu", "olivia@mergington.edu" }
                }
            }
        };

        [HttpGet]
        public ActionResult<Dictionary<string, Activity>> GetActivities()
        {
            return Ok(_activities);
        }

        [HttpPost("{activityName}/signup")]
        public ActionResult Signup(string activityName, [FromQuery] string email)
        {
            // Validate activity exists
            if (!_activities.ContainsKey(activityName))
            {
                return NotFound(new { detail = "Activity not found" });
            }

            // Get the specific activity
            var activity = _activities[activityName];

            // Add student
            activity.Participants.Add(email);

            return Ok(new { message = $"Signed up {email} for {activityName}" });
        }
    }
}
