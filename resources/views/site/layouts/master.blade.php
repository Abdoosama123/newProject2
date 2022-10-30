{{--<!DOCTYPE html>--}}
{{--<html lang="{{\Illuminate\Support\Facades\App::getLocale()}}">--}}
{{--<head>--}}
{{--    @include('site.layouts.head')--}}
{{--</head>--}}
{{--<body @yield('body_style')>--}}
{{--@yield('content')--}}
{{--@include('site.layouts.footer')--}}
{{--@include('site.layouts.scripts')--}}
{{--@toastr_js--}}
{{--@toastr_render--}}
{{--@yield('site-js')--}}
{{--</body>--}}
{{--</html>--}}


<!DOCTYPE html>
<html lang="zxx">
<title>
    @yield('title')

</title>
<head>

@include('site.layouts.head')

</head>
<body>

@yield('content')

@include('site.layouts.headr')

@include('site.layouts.footer')

@include('site.layouts.social-navbar')

@include('site.layouts.scripts')

@yield('site-js')
</body>
</html>


