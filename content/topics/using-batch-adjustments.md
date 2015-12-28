/*
Sort: 3
*/
Batch adjustments allow you to adjust multiple entries based on entered criteria. In order to make a batch adjustment, a user must have permission to make an adjustment.  
*To learn more about adjustments, see [Managing Adjustments](%base_url%/topics/managing-adjustments)*.

To make a batch adjustment, open any report and click **Batch Adjustments** in the reports controls.


### Date Range
All applicable entries within this date range will have an adjustment added.

### Specified Time
Adjustments will only be made to entries which started before this time and ended after this time within the specified date range.  This time can be entered in 12 or 24 hour format.  If an entry occurred in another time zone, that time zone will be used unless *Ignore individual entry time zone information* is selected, in which case your time zone will be used.

### Adjustment Options
A note indicating the purpose of the adjustment should be added to all adjustments, such as "Lunch" or "Break".  You can optionally elect to not make an adjustment that meets the other criteria if it already has an adjustment, or it already has an adjustment with the same note.  This can be used to prevent making the same adjustment twice. Notes are case-sensitive for this purpose, so "Lunch" is not the same as "lunch".

### Adjustment Amount
Hours and Minutes to be added or subtracted from the total calculated time.  When subtracting, the adjustment amount cannot be more than the total calculated time, including other adjustments.  If an applicable entry's total time is less than the desired adjustment, the time will be reduced to zero.  Selecting "Cascade to subsequent entries, if possible, until full adjustment is made" will continue subtracting time from entries after that but within the work day until the desired adjustment is made in full, or the end of the day is reached.
