#pragma checksum "/Users/macminihs/Projects/SACP-DEV/SACP-DEV/Views/Prestamos/Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5c2e06cb8d9bb4a5f9aa441f05e5209d63e3dc4a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Prestamos_Index), @"mvc.1.0.view", @"/Views/Prestamos/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/macminihs/Projects/SACP-DEV/SACP-DEV/Views/_ViewImports.cshtml"
using SACP_DEV;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/macminihs/Projects/SACP-DEV/SACP-DEV/Views/_ViewImports.cshtml"
using SACP_DEV.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5c2e06cb8d9bb4a5f9aa441f05e5209d63e3dc4a", @"/Views/Prestamos/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"70b5b173d54c00f54243a9fc8d5febdc19cb73f0", @"/Views/_ViewImports.cshtml")]
    public class Views_Prestamos_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Custom/images/avatar-mini-2.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString(""), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/Prestamos/Index.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/Users/macminihs/Projects/SACP-DEV/SACP-DEV/Views/Prestamos/Index.cshtml"
  
    ViewData["Title"] = "Nuevo Prestamo";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <div class=\"panel op\" id=\"InfoUser\">\n            <div class=\"panel-body profile-information\">\n                <div class=\"profile-pic text-center\">\n                    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "5c2e06cb8d9bb4a5f9aa441f05e5209d63e3dc4a4516", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
                </div>
                <div class=""row mt-30"">
                    <div class=""col-md-12"">
                        <div class=""location-info"">
                            <h5>Nombre: <span id=""NameAlum"">-</span> </h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class=""row mt-15"">
                    <div class=""col-md-12"">
                        <div class=""location-info"">
                            <h5>Matricula: <span id=""matAlum"">-</span> </h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class=""row mt-15"">
                    <div class=""col-md-12"">
                        <div class=""location-info"">
                            <h5>Grupo: <span id=""GrupoAlum"">-</span> </h5>
                            <p></p>
                        </div>
                    </div>
                </div>
              ");
            WriteLiteral(@"  <div class=""row mt-15"">
                    <div class=""col-md-12"">
                        <div class=""location-info"">
                            <h5>Turno: <span id=""turnAlum"">-</span> </h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class=""row mt-15"">
                    <div class=""col-md-12"">
                        <div class=""location-info"">
                            <h5>Clase: <span id=""classAlum"">-</span> </h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class=""row mt-15"">
                    <div class=""col-md-12"">
                        <div class=""location-info"">
                            <h5>Tutor: <span id=""AdvisorAlum"">-</span> </h5>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div");
            WriteLiteral(@" class=""col-md-9"">
        <div class=""row"">
            <div class=""col-md-12"">
                <div class=""panel"">
                    <div class=""panel-body"">
                        <input type=""text"" class=""form-control"" id=""InputUser"" placeholder=""Ingrese la matricula"">
                    </div>
                </div>
            </div>
            <div class=""col-md-12"">
                <div class=""panel"">
                    <div class=""panel-body"">
                        <input type=""text"" class=""form-control w-50"" placeholder=""Escanear Marbete"" id=""inpMar"" disabled>
                        <table class=""table table-striped table-hover table-bordered"" id=""AlumTable"">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Foto</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Descripcion</th>
 ");
            WriteLiteral(@"                               </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
            <div class=""col-md-12"">
                <div class=""panel"">
                    <div class=""panel-body"">
                        <div class=""row mb-15"">
                            <div class=""col-md-4"">

                            </div>
                            <div class=""col-md-4 text-center"">
                                <h5>Ubicacion </h5>
                            </div>
                            <div class=""col-md-4"">

                            </div>
                        </div>
                        <div class=""row"">
                            <div class=""col-md-3"">

                            </div>
                            <div class=""col-md-3"">
                                <div class=""form-horizontal"">
                                    <div class=""form-group"">
                         ");
            WriteLiteral("               <label class=\"control-label col-md-3\">Salon:</label>\n                                        <div class=\"col-md-9\">\n                                            <input size=\"16\" type=\"text\"");
            BeginWriteAttribute("value", " value=\"", 4622, "\"", 4630, 0);
            EndWriteAttribute();
            WriteLiteral(@" class=""form-control"">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=""col-md-3"">
                                <div class=""form-horizontal"">
                                    <div class=""form-group"">
                                        <label class=""control-label col-md-3"">Grupo:</label>
                                        <div class=""col-md-9"">
                                            <input size=""16"" type=""text""");
            BeginWriteAttribute("value", " value=\"", 5220, "\"", 5228, 0);
            EndWriteAttribute();
            WriteLiteral(@" class=""form-control"">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=""col-md-3"">

                            </div>
                        </div>
                        <div class=""row mt-15"">
                            <div class=""col-md-3""></div>
                            <div class=""col-md-3""><button class=""btn btn-red ml-60"">Cancelar</button></div>
                            <div class=""col-md-3""><button class=""btn btn-green ml-60"">Guardar</button></div>
                            <div class=""col-md-3""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
");
            DefineSection("Scripts", async() => {
                WriteLiteral("\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5c2e06cb8d9bb4a5f9aa441f05e5209d63e3dc4a11965", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\n");
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591