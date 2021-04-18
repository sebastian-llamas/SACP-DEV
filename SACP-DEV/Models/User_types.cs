using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace SACP_DEV.Models
{
    [Table("USER_TYPES")]
    public class User_types
    {
        [Key]
        public int ID_USER_TYPES { get; set; }
        public string TYPE { get; set; }
        public string NAME_TYPE { get; set; }
    }
}
