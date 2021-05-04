using System;
namespace SACP_DEV.BO
{
    public class UserBO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public int TypeUser { get; set; }
        public string NameType { get; set; }
        public string NameStatus { get; set; }
        public int Status { get; set; }
        public string Created_by { get; set; }
        public string Created_on { get; set; }

    }
}
