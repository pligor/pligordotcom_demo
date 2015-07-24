/**
 * Created by pligor on 5/24/15.
 */

/// <reference path="../typescript.ts" />

class Size2D {
    //private originalWidth: number
    //private originalHeight: number

    constructor(public width:number, public height:number/*,
     private originalWidth?: number, private originalHeight?: number*/) {
        //this.originalWidth = width
        //this.originalHeight = height

        this.width = Math.round(width)

        this.height = Math.round(height)

        this.width = this.width < 1 ? 1 : this.width

        this.height = this.height < 1 ? 1 : this.height
    }

    toString():string {
        return this.width + ", " + this.height
    }

    isFilling(that:Size2D):boolean {
        return this.width >= that.width && this.height >= that.height
    }

    fillWithTolerance(targetSize:Size2D, tolerance:number):Size2D {
        if (this.isFilling(targetSize)) {
            var widthDistance = this.width - targetSize.width
            var heightDistance = this.height - targetSize.height

            var minDistance = Math.min(widthDistance, heightDistance)

            if (minDistance >= tolerance) {
                return this.fill(targetSize)
            } else {
                return this
            }
        } else {
            var filled = this.fill(targetSize)

            var widthDistance = filled.width - targetSize.width
            var heightDistance = filled.height - targetSize.height

            if (widthDistance <= heightDistance) {
                return filled.increaseWidthKeepingRatio(tolerance)
            } else {
                return filled.increaseHeightKeepingRatio(tolerance)
            }
        }
    }

    increaseWidthKeepingRatio(offset:number):Size2D {
        assert(offset >= 0)

        var newWidth = this.width + offset

        var newHeight = newWidth / this.getWidthToHeightRatio()

        return new Size2D(newWidth, newHeight)
    }

    increaseHeightKeepingRatio(offset:number):Size2D {
        assert(offset >= 0)

        var newHeight = this.height + offset

        var newWidth = newHeight * this.getWidthToHeightRatio()

        return new Size2D(newWidth, newHeight)
    }

    increaseSmallerSizeKeepingRatio(offset:number):Size2D {
        return this.width <= this.height ?
            this.increaseWidthKeepingRatio(offset) : this.increaseHeightKeepingRatio(offset)
    }

    /**
     * Maintains Aspect ratio
     */
    fill(targetSize:Size2D):Size2D {
        var widthRatio = this.width / targetSize.width
        var heightRatio = this.height / targetSize.height

        var minRatio = Math.min(widthRatio, heightRatio)

        return new Size2D(this.width / minRatio, this.height / minRatio)
        /*, this.originalWidth, this.originalHeight*/
    }

    getWidthToHeightRatio():number {
        return this.width / this.height
    }

    offsetWidth(offset:number):Size2D {
        return new Size2D(this.width + offset, this.height)
    }

    offsetHeight(offset:number):Size2D {
        return new Size2D(this.width, this.height + offset)
    }

    increaseWidth(offset:number):Size2D {
        assert(offset >= 0)
        return this.offsetWidth(offset)
    }

    increaseHeight(offset:number):Size2D {
        assert(offset >= 0)
        return this.offsetHeight(offset)
    }

    reduceWidth(offset:number):Size2D {
        assert(offset >= 0)

        return this.offsetWidth(-offset)
    }

    reduceHeight(offset:number):Size2D {
        assert(offset >= 0)

        return this.offsetHeight(-offset)
    }

    isEqual(that:Size2D):boolean {
        return this.width == that.width && this.height == that.height
    }
}

class TestSize2D {
    testFillWithTolerance() {
        var curSize = new Size2D(1920, 1080)
        var tolerance = 200

        var largerHeight = new Size2D(1800, 3500)
        assert(largerHeight.height + tolerance == curSize.fillWithTolerance(largerHeight, tolerance).height)

        var largerWidth = new Size2D(2000, 500)
//assert( largerHeight.height + 200 == curSize.fillWithTolerance(largerHeight, 200).height )
        assert(largerWidth.width + tolerance == curSize.fillWithTolerance(largerWidth, tolerance).width)


        var notSmallEnough = new Size2D(1800, 500)
        assert(curSize.fillWithTolerance(notSmallEnough, tolerance).isEqual(curSize))

        var smallEnough = new Size2D(1500, 500)
        assert(curSize.fillWithTolerance(smallEnough, tolerance).width == smallEnough.width)   //1500 x kati sto swsto ratio
//.isEqual(curSize)

        console.log("test fill with tolerance is ok")
    }

    testFill() {
        var curSize = new Size2D(1920, 1080)

        var smallerWidth = curSize.reduceWidth(1920 / 2)
        assert(curSize.fill(smallerWidth).isEqual(curSize), "if same height but larger must already fill the target")

        var smallerHeight = curSize.reduceHeight(1080 / 2)
        assert(curSize.fill(smallerHeight).isEqual(curSize), "if same width but larger must already fill the target")

        var smallerHeightAndWidth = curSize.reduceWidth(1920 / 2).reduceHeight(1080 / 2)
        assert(curSize.fill(smallerHeightAndWidth).isEqual(smallerHeightAndWidth), "same ratio must be reduced proportionally")

        var smallerWidthAndEvenSmallerHeight = curSize.reduceWidth(1920 / 2).reduceHeight(1080 * 2 / 3)
        assert(smallerWidthAndEvenSmallerHeight.width == curSize.fill(smallerWidthAndEvenSmallerHeight).width)
        assert(smallerWidthAndEvenSmallerHeight.height < curSize.fill(smallerWidthAndEvenSmallerHeight).height)

        var smallerHeightAndEvenSmallerWidth = curSize.reduceWidth(1920 * 4 / 5).reduceHeight(1080 / 5)
        assert(smallerHeightAndEvenSmallerWidth.height == curSize.fill(smallerHeightAndEvenSmallerWidth).height)
        assert(smallerHeightAndEvenSmallerWidth.width < curSize.fill(smallerHeightAndEvenSmallerWidth).width)


        var largerHeight = curSize.increaseHeight(200)
        assert(
            curSize.fill(largerHeight).height === largerHeight.height
        )
        assert(
            curSize.fill(largerHeight).width > largerHeight.width
        )

        var largerWidth = curSize.increaseWidth(200)
        assert(
            curSize.fill(largerWidth).width === largerWidth.width
        )
        assert(
            curSize.fill(largerWidth).height > largerWidth.height
        )

        var largerWidthAndHeight = curSize.increaseHeight(200).increaseWidth(200)
        assert(
            curSize.fill(largerWidthAndHeight).height === largerWidthAndHeight.height
        )
        assert(
            curSize.fill(largerWidthAndHeight).width > largerWidthAndHeight.width
        )

        //etc.
        console.log("test fill ok")
    }
}
//new TestSize2D().testFill()
