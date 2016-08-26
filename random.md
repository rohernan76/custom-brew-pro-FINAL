	<input #sldValue [(ngModel)]="slideValue" type="range" id="myRange" value="90">
	<div id="slider">{{sldValue | json }}</div>

	<ng2-slider min="10"
            max="100"
            value="25"
            stepValue="5"
            (onRangeChanged)="plainValueChanged($event, 'plain_2')">
</ng2-slider>
<p class="value-box">
    Value: <span class="value-span" id="plain_2">25</span>
</p>


    // <input #sldValue [(ngModel)]="slideValue" type="range" id="myRange" min="0" max="20" value="5">
    // <div id="slider"></div>
    // <h2>slideValue = {{slideValue | json}}</h2>

    <ng2-slider 
    min="6"
    max="23"
    startValue="9"
    endValue="21"
    stepValue="2"
    [normalHandlerStyle]="{ 'background-color': 'green'}"
    [slidingHandlerStyle]="{
          'border-radius': '9px',
          'background-color': 'red'
    }">
</ng2-slider>

<input type="range" name="points" id="points" value="50" min="0" max="100">
      <input type="submit" data-inline="true" value="Submit">

      <input _ngcontent-oao-4="" id="myRange" max="20" min="0" type="range" value="5" class="ng-valid ng-dirty ng-touched" ng-reflect-model="5" style="
    width: 500px;
">