"use strict";
var title = [];
Component({
    properties: {
        active: {
            type: Number
        }
    },
    relations: {
        '../s-tab/index': {
            type: 'child',
            linked: function (e) {
                title.push(e.data.title);
            }
        }
    },
    pageLifetimes: {
        show: function () {
            this.setData({
                title: title
            });
        },
    },
    data: {
        title: []
    },
    methods: {
        changeHandle: function (e) {
            var idx = e.currentTarget.dataset.idx;
            var elements = this.getRelationNodes('../s-tab/index');
            this.changeCurrent(idx, elements);
            this.setData({
                active: idx
            });
        },
        changeCurrent: function (activeKey, elements) {
            if (elements.length > 0) {
                elements.forEach(function (element) {
                    element.changeCurrent({
                        activeKey: activeKey
                    });
                });
            }
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDO0FBQ3pCLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1NBQ2I7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULGdCQUFnQixFQUFFO1lBQ2hCLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLFVBQVUsQ0FBQztnQkFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUM7U0FDRjtLQUNGO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsSUFBSSxFQUFFO1lBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxLQUFLLEVBQUUsS0FBSzthQUNiLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtJQUtELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFjO0tBQ3RCO0lBS0QsT0FBTyxFQUFFO1FBQ1AsWUFBWSxFQUFFLFVBQVUsQ0FBTTtZQUM1QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDdEMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxNQUFNLEVBQUUsR0FBRzthQUNaLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxhQUFhLEVBQWIsVUFBYyxTQUFpQixFQUFFLFFBQWE7WUFDNUMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQVk7b0JBQzVCLE9BQU8sQ0FBQyxhQUFhLENBQUM7d0JBQ3BCLFNBQVMsV0FBQTtxQkFDVixDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUE7YUFDSDtRQUNILENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInZhciB0aXRsZTogc3RyaW5nW10gPSBbXTtcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6IE51bWJlclxuICAgIH1cbiAgfSxcbiAgcmVsYXRpb25zOiB7XG4gICAgJy4uL3MtdGFiL2luZGV4Jzoge1xuICAgICAgdHlwZTogJ2NoaWxkJyxcbiAgICAgIGxpbmtlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGl0bGUucHVzaChlLmRhdGEudGl0bGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGFnZUxpZmV0aW1lczoge1xuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHRpdGxlOiB0aXRsZVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgdGl0bGU6IFtdIGFzIHN0cmluZ1tdXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIGNoYW5nZUhhbmRsZTogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgICAgdmFyIGlkeCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkeDtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9zLXRhYi9pbmRleCcpXG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnQoaWR4LCBlbGVtZW50cylcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFjdGl2ZTogaWR4XG4gICAgICB9KVxuICAgIH0sXG4gICAgY2hhbmdlQ3VycmVudChhY3RpdmVLZXk6IG51bWJlciwgZWxlbWVudHM6IGFueSkge1xuICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jaGFuZ2VDdXJyZW50KHtcbiAgICAgICAgICAgIGFjdGl2ZUtleVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgfVxufSlcbiJdfQ==