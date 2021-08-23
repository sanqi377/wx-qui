"use strict";
var title = [];
var active = 0;
Component({
    properties: {
        title: {
            type: String
        }
    },
    relations: {
        '../s-tabs/index': {
            type: 'parent',
            linked: function (e) {
                title.push(this.data.title);
                active = e.data.active;
            }
        }
    },
    pageLifetimes: {
        show: function () {
            this.setData({
                titles: title,
                active: active
            });
        },
    },
    data: {
        active: 0,
        titles: []
    },
    methods: {
        changeCurrent: function (_a) {
            var activeKey = _a.activeKey;
            this.setData({
                active: activeKey,
            });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUNkLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNO1NBQ2I7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLFVBQVUsQ0FBQztnQkFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7WUFDeEIsQ0FBQztTQUNGO0tBQ0Y7SUFDRCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUU7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE1BQU0sUUFBQTthQUNQLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtJQUlELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLEVBQWM7S0FDdkI7SUFLRCxPQUFPLEVBQUU7UUFDUCxhQUFhLFlBQUMsRUFBYTtnQkFBWCxTQUFTLGVBQUE7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdGl0bGU6IHN0cmluZ1tdID0gW107XG5sZXQgYWN0aXZlID0gMFxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9XG4gIH0sXG4gIHJlbGF0aW9uczoge1xuICAgICcuLi9zLXRhYnMvaW5kZXgnOiB7XG4gICAgICB0eXBlOiAncGFyZW50JyxcbiAgICAgIGxpbmtlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGl0bGUucHVzaCh0aGlzLmRhdGEudGl0bGUpO1xuICAgICAgICBhY3RpdmUgPSBlLmRhdGEuYWN0aXZlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwYWdlTGlmZXRpbWVzOiB7XG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdGl0bGVzOiB0aXRsZSxcbiAgICAgICAgYWN0aXZlXG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgYWN0aXZlOiAwLFxuICAgIHRpdGxlczogW10gYXMgc3RyaW5nW11cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgY2hhbmdlQ3VycmVudCh7IGFjdGl2ZUtleSB9KSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhY3RpdmU6IGFjdGl2ZUtleSxcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufSlcbiJdfQ==