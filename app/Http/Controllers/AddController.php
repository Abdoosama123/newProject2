<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddController extends Controller
{

    public function index (Request $request ){


//        $book = new book();
//        $book->name = $request->name;
//        $book->desc = $request->desc;
////        $book->save();
//        return  $book->id;
        $abdo =new abdo();
        $abdo->id='1';
//        $abdo->save();


        echo $abdo->play();
        return '<br/>'.$abdo->id;
    }


//    public function index(Request $request)
//    {
//        if ($request->ajax()) {
//            $data = Book::select('*');
//            return Datatables::of($data)
//                ->addIndexColumn()
//                ->addColumn('action', function($row){
//
//                    $btn = '<a href="javascript:void(0)" class="edit btn btn-primary btn-sm">View</a>';
//
//                    return $btn;
//                })
//                ->rawColumns(['action'])
//                ->make(true);
//        }
//
//        return view('users');
//    }


}
