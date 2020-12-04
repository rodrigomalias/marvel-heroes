package com.marvel;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.util.Log;

public class TotalMarvelHeroes extends ReactContextBaseJavaModule {
    TotalMarvelHeroes(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "TotalMarvelHeroes";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void returnMarvelHeroString(int totalMarvelHeroes, Callback stringCallback) {

        stringCallback.invoke("Total de " + totalMarvelHeroes + " super-heróis");
    }
}