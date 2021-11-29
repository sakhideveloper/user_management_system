<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">

    <div data-simplebar class="h-100">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" key="t-menu">@lang('translation.Menu')</li>

                <li>
                    <a href="{{ url('/dashboard')}}">
                        <i class="bx bx-home-circle"></i>
                        {{-- <span class="badge rounded-pill bg-info float-end">04</span> --}}
                        <span key="t-dashboards">@lang('translation.Dashboards')</span>
                    </a>
                    
                </li>
                {{-- <li>
                    <a href="javascript: void(0);" class="waves-effect">
                        <i class="bx bx-chat"></i>
                        <span key="t-chat">@lang('translation.Chat')</span>
                    </a>
                </li> --}}
                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bxl-product-hunt"></i>
                        <span key="t-product">@lang('translation.Products')</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                       
                        <li>
                            <a href="{{ url('products') }}">
                                <span key="t-level-1-1">@lang('translation.Products')</span>
                            </a>
                        </li>
                        <li>
                            <a href="{{ url('categories') }}"
                                    key="t-level-1-2">@lang('translation.Product_Categories')</a>
                        </li> 
                        <li>
                            <a href="{{ url('products-brands') }}"
                                    key="t-level-1-3">Brand</a>
                        </li> 
                        <li>
                            <a href="{{ url('products-tags') }}"
                                    key="t-level-1-4">Tag</a>
                        </li> 
                        <li>
                            <a href="{{ url('products-attributes') }}"
                                    key="t-level-1-5">Attributes</a>
                            
                        </li>   
                        <li>
                            <a href="{{ url('customers-types') }}"
                                    key="t-level-1-6">Types</a>
                            
                        </li>            
                    </ul>    
                    
                </li>  
                <li>
                    <a href="{{url('orders')}}" class="waves-effect">
                        <i class="bx bx-cart-alt"></i>
                        <span key="t-orders">@lang('translation.Orders')</span>
                    </a>
                </li> 
                <li>
                    <a href="{{ url('customers')}}" key="t-customers" class="waves-effect">
                        <i class="bx bx-user-check"></i>
                        <span key="t-customers">@lang('translation.Customers')</span>
                    </a>
                </li> 
                {{-- <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bx-envelope"></i>
                        <span key="t-email">@lang('translation.Email')</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="javascript: void(0);" key="t-inbox">@lang('translation.Inbox')</a></li>
                        <li><a href="javascript: void(0);" key="t-read-email">@lang('translation.Read_Email')</a></li>
                        <li>
                            <a href="javascript: void(0);">
                                <span class="badge rounded-pill badge-soft-success float-end" key="t-new">@lang('translation.New')</span>
                                <span key="t-email-templates">@lang('translation.Templates')</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="javascript: void(0);" key="t-basic-action">@lang('translation.Basic_Action')</a></li>
                                <li><a href="javascript: void(0);" key="t-alert-email">@lang('translation.Alert_Email')</a></li>
                                <li><a href="javascript: void(0);" key="t-bill-email">@lang('translation.Billing_Email')</a></li>
                            </ul>
                        </li>
                    </ul>
                </li> --}}

                {{-- <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bx-receipt"></i>
                        <span key="t-invoices">@lang('translation.Invoices')</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="javascript: void(0);" key="t-invoice-list">@lang('translation.Invoice_List')</a></li>
                        <li><a href="javascript: void(0);" key="t-invoice-detail">@lang('translation.Invoice_Detail')</a>
                        </li>
                    </ul>
                </li> --}}
                {{-- <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bxs-user-detail"></i>
                        <span key="t-contacts">@lang('translation.Contacts')</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="javascript: void(0);" key="t-user-grid">@lang('translation.User_Grid')</a></li>
                        <li><a href="javascript: void(0);" key="t-user-list">@lang('translation.User_List')</a></li>
                        <li><a href="javascript: void(0);" key="t-profile">@lang('translation.Profile')</a></li>
                    </ul>
                </li> --}}
                <li>
                    <a href="javascript:void(0)" class="has-arrow waves-effect">
                        {{-- <span class="badge rounded-pill bg-success float-end"
                            key="t-new">@lang('translation.New')</span> --}}
                        <i class="bx bx-user-circle"></i>
                        <span key="t-authentication">Users Management</span>
                    </a>    
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="{{ url('/users') }}" key="t-user-list">Users</a></li>
                    </ul>
                </li>
                <li>
                    <a href="{{ url('/pages/seo')}}" class=" waves-effect">
                        <i class="bx bx-book-open"></i>
                        <span key="t-authentication">Pages</span>
                    </a>    
                  
                </li>
                <li>
                    <a href="{{ url('/pages/blog')}}" class=" waves-effect">
                        <i class="bx bx-book-open"></i>
                        <span key="t-authentication">Blogs</span>
                    </a>    
                  
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bx-cog"></i>
                        <span key="t-utility">Settings</span>
                    </a>
                </li>

            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
<!-- Left Sidebar End -->
