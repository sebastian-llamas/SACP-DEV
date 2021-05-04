using System;
using System.Collections.Generic;
using SACP_DEV.DAL;
using SACP_DEV.BO;

namespace SACP_DEV.BL
{
    public class PrestamoBL
    {
        PrestamoDAL dal = new PrestamoDAL();



        public List<GetProductoPrestamos> GetPrestamo(int marberte)
        {
            return dal.GetProduct(marberte);
        }
    }
}
