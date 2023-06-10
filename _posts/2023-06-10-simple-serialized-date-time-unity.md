---
title: Simple Serialized Date Time and Time Machine Unity
date: 2023-06-10 06:33:35 +0700
author: amoy
image:
    path: /assets/commons/preview-simple-date-time.png
categories: [Blogging,Unity]
tags: [writing,tips,codes]
render_with_liquid: false
hidden: false
---

## Simple Serialized System.DateTime for Unity
I have made serialized Date Time based on System.DateTime and also add a time machine script that controls Date Time. Try to change `TimeSpeed` on `TimeMachine.cs` here is the preview.
![Time Machine Unity](/assets/commons/simple-date-time-unity.png)
_Attached TimeMachine.cs into GameObject_

> You can download the codes from [Github Gist](https://gist.github.com/restush/a63a34a710ec6945ab435bd81bb3186c "Open Github Gist") or copy the codes below.
{: .prompt-info }

<style>
.buttonClick {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>

### SimpleDateTime.cs
```csharp
using System;
using UnityEngine;

/// <summary>
/// Simple Date Time based on <see cref="System.DateTime"/>.
/// <example>
/// <br/><br/>
/// Usage 1:
/// <code>
/// var simpleDateTime = new SimpleDateTime(DateTime.Now);
/// </code>
/// <br/><br/>
/// Usage 2:
/// <code>
/// var simpleDateTime = new SimpleDateTime(new DateTime(1996,12,28));
/// </code>
/// </example>
/// </summary>
[System.Serializable]
public class SimpleDateTime
{
    [SerializeField] private long _ticks;
    [SerializeField] private int _hour;
    [SerializeField] private int _minute;
    [SerializeField] private int _second;
    [SerializeField] private int _milisecond;
    [SerializeField] private DayOfWeek _dayOfWeek;
    [SerializeField] private int _day;
    [SerializeField] private int _month;
    [SerializeField] private int _year;

    public SimpleDateTime(DateTime dateTime)
    {
        Ticks = dateTime.Ticks;
    }

    /// <summary>
    /// Gets the number of ticks that represent the date and time of this instance.
    /// </summary>
    public virtual long Ticks { get => _ticks; 
        private set
        {
            _ticks = value;
            var date = new DateTime(value);
            _hour = date.Hour;
            _minute = date.Minute;
            _second = date.Second;
            _milisecond = date.Millisecond;
            _dayOfWeek = date.DayOfWeek; ;
            _day = date.Day;
            _month = date.Month;
            _year = date.Year;
        } 
    }

    public virtual int Hour { get => _hour; }
    public virtual int Minute { get => _minute;}
    public virtual int Second { get => _second; }
    public virtual int Milisecond { get => _milisecond; }
    public virtual DayOfWeek DayOfWeek { get => _dayOfWeek; }
    public virtual int Day { get => _day; }
    public virtual int Month { get => _month; }
    public virtual int Year { get => _year; }
    public virtual DateTime DateTime { get => new(_ticks); }
    /// <summary>
    /// Add Milisecond to instance.
    /// <example>
    /// <br/><br/>Usage 1:
    /// <code>
    /// var simpleDateTime = new SimpleDateTime(DateTime.Now);
    /// simpleDateTime.AddMilisecond(500);
    /// </code>
    /// Usage 2:
    /// <code>
    /// var simpleDateTime = new SimpleDateTime(DateTime.Now);
    /// float timeDeltaToMilisecond = Time.deltaTime * 1000;
    /// simpleDateTime.AddMilisecond(timeDeltaToMilisecond);
    /// </code>
    /// </example>
    /// </summary>    
    /// <param name="value">Milisecond</param>
    public virtual void AddMiliseconds(float value)
    {
        var _dateTime = new DateTime(_ticks);
        _dateTime += TimeSpan.FromMilliseconds(value);
        Ticks = _dateTime.Ticks;
    }

    /// <summary>
    /// Add Seconds to instance.
    /// <example>
    /// <br/><br/>Usage 1:
    /// <code>
    /// var simpleDateTime = new SimpleDateTime(DateTime.Now);
    /// simpleDateTime.AddSeconds(10);
    /// </code>
    /// Usage 2:
    /// <code>
    /// var simpleDateTime = new SimpleDateTime(DateTime.Now);
    /// simpleDateTime.AddMilisecond(Time.deltaTime);
    /// </code>
    /// </example>
    /// </summary>
    /// <param name="value">Seconds</param>
    public virtual void AddSeconds(float value)
    {
        var _dateTime = new DateTime(_ticks);
        _dateTime += TimeSpan.FromSeconds(value);
        Ticks = _dateTime.Ticks;
    }
    /// <summary>
    /// Add Hours to instance.
    /// </summary>
    /// <param name="value">Hours</param>
    public virtual void AddHours(float value)
    {
        var _dateTime = new DateTime(_ticks);
        _dateTime += TimeSpan.FromHours(value);
        Ticks = _dateTime.Ticks;
    }
    /// <summary>
    /// Add Days to instance.
    /// </summary>
    /// <param name="value">Hours</param>
    public virtual void AddDays(float value)
    {
        var _dateTime = new DateTime(_ticks);
        _dateTime += TimeSpan.FromHours(value);
        Ticks = _dateTime.Ticks;
    }
    /// <summary>
    /// Add Months to instance
    /// </summary>
    /// <param name="value">Hours</param>
    public virtual void AddMonths(int value)
    {
        var _dateTime = new DateTime(_ticks);
        _dateTime = _dateTime.AddMonths(value);
        Ticks = _dateTime.Ticks;
    }
    /// <summary>
    /// Add Years to instance.
    /// </summary>
    /// <param name="value">Hours</param>
    public virtual void AddYears(int value)
    {
        var _dateTime = new DateTime(_ticks);
        _dateTime = _dateTime.AddYears(value);
        Ticks = _dateTime.Ticks;
    }
    public override string ToString()
    {
        var _dateTime = new DateTime(_ticks);
        return _dateTime.ToString();
    }

}
```

### TimeMachine.cs

```csharp
using UnityEngine;

public class TimeMachine : MonoBehaviour
{
    public static event System.Action<float, SimpleDateTime> OnTimeChanged;
    [SerializeField] private int _timeSpeed = 1;
    [SerializeField] private float _totalTime;
    [SerializeField] private float _timeSinceStart;
    [SerializeField] private SimpleDateTime _simpleDateTime;
 
    private void Awake()
    {
        _simpleDateTime = new SimpleDateTime(System.DateTime.Now);
    }
    private void Update()
    {
        _timeSinceStart = Time.time;
        var time = Time.deltaTime * _timeSpeed;
        _totalTime += time;
        _simpleDateTime.AddSeconds(time);
        OnTimeChanged?.Invoke(_totalTime, _simpleDateTime);
    }
}
```
