---
title: Glide
---

# Glide

[[toc]]

---

::: tip
The following documentation was taken straight from the [source](http://glide.thephpleague.com/) with minor modifications. It has been copied here for your convenience.
:::

Glide is a wonderfully easy on-demand image manipulation library written in PHP. Its straightforward API is exposed via HTTP, similar to cloud image processing services like [Imgix](http://www.imgix.com/) and [Cloudinary](http://cloudinary.com/). Glide leverages powerful libraries like [Intervention Image](http://image.intervention.io/) (for image handling and manipulation) and [Flysystem](http://flysystem.thephpleague.com/) (for file system abstraction).

## Quick Reference
| Name | Function | Description |
|------|----------|-------------|
| Orientation | `or` | Rotates the image. |
| Flip | `flip` | Flip the image. |
| Crop | `crop` | Crops the image to specific dimensions. |
| Width | `w` | Sets the width of the image, in pixels. |
| Height | `h` | Sets the height of the image, in pixels. |
| Fit | `fit` | Sets how the image is fitted to its target dimensions. |
| Device Pixel Ratio | `dpr` | Multiplies the overall image size. |
| Brightness | `bri` | Adjusts the image brightness. |
| Contrast | `con` | Adjusts the image contrast. |
| Gamma | `gam` | Adjusts the image gamma. |
| Sharpen | `sharp` | Sharpen the image. |
| Blur | `blur` | Adds a blur effect to the image. |
| Pixelate | `pixel` | Applies a pixelation effect to the image. |
| Filter | `filt` | Applies a filter effect to the image. |
| Watermark Path | `mark` | Adds a watermark to the image. |
| Watermark Width | `markw` | Sets the width of the watermark. |
| Watermark Height | `markh` | Sets the height of the watermark. |
| Watermark X-Offset | `markx` | Sets the watermark distance from left/right edges. |
| Watermark Y-Offset | `marky` | Sets the watermark distance from top/bottom edges. |
| Watermark Padding | `markpad` | Sets the watermark distance from the edges. |
| Watermark Position | `markpos` | Sets where the watermark is positioned. |
| Background | `bg` | Sets the background color of the image. |
| Border | `border` | Add a border to the image. |
| Quality | `q` | Defines the quality of the image. |
| Format | `fm` | Encodes the image to a specific format. |

---

## Adjustments

### Brightness &mdash; `bri`
Adjusts the image brightness. Use values between `-100` and `+100`, where `0` represents no change.

```html
<img src="kayaks.jpg?w=500&bri=-25">
```

![Brightness](@images/glide_brightness.jpg)

### Contrast &mdash; `con`
Adjusts the image contrast. Use values between `-100` and `+100`, where `0` represents no change.

```html
<img src="kayaks.jpg?w=500&con=25">
```

![Contrast](@images/glide_contrast.jpg)

### Gamma &mdash; `gam`
Adjusts the image gamma. Use values between `0.1` and `9.99`.

```html
<img src="kayaks.jpg?w=500&gam=1.5">
```

![Gamma](@images/glide_gamma.jpg)

### Sharpen &mdash; `sharp`
Sharpen the image. Use values between `0` and `100`.

```html
<img src="kayaks.jpg?w=500&sharp=15">
```

![Sharpen](@images/glide_sharpen.jpg)

---

## Background &mdash; `bg`
Sets the background color of the image. See [colors](#colors) for more information on the available color formats.

```html
<img src="logo.png?w=400&bg=black">
```

![Background](@images/glide_background.png)

---

## Border

### Border &mdash; `border`
Add a border to the image. Required format: `width,color,method`.

```html
<img src="kayaks.jpg?w=500&border=10,5000,overlay">
```

![Border Overlay](@images/glide_border_overlay.jpg)

#### Width
Sets the border width in pixels, or using [relative dimensions](#relative-dimensions).

#### Colors
Sets the border color. See [colors](#colors) for more information on the available color formats.

#### Method
Sets how the border will be displayed. Available options:

- `overlay` &mdash; Place border on top of image (default).
- `shrink` &mdash; Shrink image within border (canvas does not change).
- `expand` &mdash; Expands canvas to accommodate border.

```html
<img src="kayaks.jpg?w=500&border=10,FFCC33,expand">
```

![Border Expand](@images/glide_border_expand.jpg)

---

## Crop

### Fit &mdash; `fit=crop`
Resizes the image to fill the width and height boundaries and crops any excess image data. The resulting image will match the width and height constraints without distorting the image.

```html
<img src="kayaks.jpg?w=300&h=300&fit=crop">
```

![Fit Crop](@images/glide_fit_crop.jpg)

#### Crop Position
You can also set where the image is cropped by adding a crop position. Accepts `crop-top-left`, `crop-top`, `crop-top-right`, `crop-left`, `crop-center`, `crop-right`, `crop-bottom-left`, `crop-bottom` or `crop-bottom-right`. Default is `crop-center`, and is the same as `crop`.

```html
<img src="kayaks.jpg?w=300&h=300&fit=crop-left">
```

#### Crop Focal Point
In addition to the crop position, you can be more specific about the exact crop position using a focal point. This is defined using two offset percentages: `crop-x%-y%`.

```html
<img src="kayaks.jpg?w=300&h=300&fit=crop-25-75">
```

### Crop &mdash; `crop`
Crops the image to specific dimensions prior to any other resize operations. Required format: `width,height,x,y`.

```html
<img src="kayaks.jpg?crop=100,100,915,155">
```

![Crop](@images/glide_crop.jpg)

---

## Effects

### Blur &mdash; `blur`
Adds a blur effect to the image. Use values between `0` and `100`.

```html
<img src="kayaks.jpg?w=500&blur=5">
```

![Blur](@images/glide_blur.jpg)

::: warning
Performance intensive on larger amounts of blur with GD driver. Use with care.
:::

### Pixelate &mdash; `pixel`
Applies a pixelation effect to the image. Use values between `0` and `1000`.

```html
<img src="kayaks.jpg?w=500&pixel=5">
```

![Pixelate](@images/glide_pixel.jpg)

### Filter &mdash; `filt`
Applies a filter effect to the image. Accepts `greyscale` or `sepia`.

```html
<img src="kayaks.jpg?w=500&filt=sepia">
```

![Filter](@images/glide_filter.jpg)

---

## Encode

### Quality &mdash; `q`
Defines the quality of the image. Use values between `0` and `100`. Defaults to `90`. Only relevant if the format is set to `jpg`.

```html
<img src="kayaks.jpg?w=500&q=25">
```

![Quality](@images/glide_quality.jpg)

### Format &mdash; `fm`
Encodes the image to a specific format. Accepts `jpg`, `pjpg` (progressive jpeg), `png` or `gif`. Defaults to `jpg`.

```html
<img src="kayaks.jpg?w=500&fm=gif">
```

![Quality](@images/glide_format.jpg)

---

## Flip &mdash; `flip`
Flips the image. Accepts `v`, `h` and `both`.

```html
<img src="kayaks.jpg?h=500&flip=v">
```

![Flip](@images/glide_flip.jpg)

---

## Orientation &mdash; `or`
Rotates the image. Accepts `auto`, `0`, `90`, `180` or `270`. Default is `auto`. The `auto` option uses Exif data to automatically orient images correctly.

```html
<img src="kayaks.jpg?h=500&or=90">
```

![Orientation](@images/glide_orientation.jpg)

---

## Size

### Width &mdash; `w`
Sets the width of the image, in pixels.

```html
<img src="kayaks.jpg?w=500">
```

![Width](@images/glide_width.jpg)

### Height &mdash; `h`
Sets the height of the image, in pixels.

```html
<img src="kayaks.jpg?h=333">
```

![Height](@images/glide_height.jpg)

### Fit &mdash; `fit`
Sets how the image is fitted to its target dimensions.

### Accepts
- `contain` &mdash; Default. Resizes the image to fit within the width and height boundaries without cropping, distorting or altering the aspect ratio.
- `max` &mdash; Resizes the image to fit within the width and height boundaries without cropping, distorting or altering the aspect ratio, and will also not increase the size of the image if it is smaller than the output size.
- `fill` &mdash; Resizes the image to fit within the width and height boundaries without cropping or distorting the image, and the remaining space is filled with the background color. The resulting image will match the constraining dimensions.
- `stretch` &mdash; Stretches the image to fit the constraining dimensions exactly. The resulting image will fill the dimensions, and will not maintain the aspect ratio of the input image.
- `crop` &mdash; Resizes the image to fill the width and height boundaries and crops any excess image data. The resulting image will match the width and height constraints without distorting the image. See [crop](#api-crop) for more information.

```html
<img src="kayaks.jpg?w=300&h=300&fit=stretch">
```

![Fit](@images/glide_fit.jpg)

---

## Pixel Density

### Device Pixel Ratio &mdash; `dpr`
The device pixel ratio is used to easily convert between CSS pixels and device pixels. This makes it possible to display images at the correct pixel density on a variety of devices such as Apple devices with Retina Displays and Android devices. You must specify either a width, a height, or both for this parameter to work. The default is `1`. The maximum value that can be set for dpr is `8`.

```html
<img src="kayaks.jpg?w=250&dpr=2">
```

![DPR](@images/glide_dpr.jpg)

---

## Watermarks

### Path &mdash; `mark`
Adds a watermark to the image. Must be a path to an image in the watermarks file system, as configured in your server.

```html
<img src="kayaks.jpg?mark=logo.png">
```

![Mark](@images/glide_mark.jpg)

### Width &mdash; `markw`
Sets the width of the watermark in pixels, or using [relative dimensions](#relative-dimensions).

```html
<img src="kayaks.jpg?mark=logo.png&markw=200">
```

### Height &mdash; `markh`
Sets the height of the watermark in pixels, or using [relative dimensions](#relative-dimensions).

```html
<img src="kayaks.jpg?mark=logo.png&markh=200">
```

### Fit &mdash; `markfit`
Sets how the watermark is fitted to its target dimensions.

### Accepts
- `contain` &mdash; Default. Resizes the image to fit within the width and height boundaries without cropping, distorting or altering the aspect ratio.
- `max` &mdash; Resizes the image to fit within the width and height boundaries without cropping, distorting or altering the aspect ratio, and will also not increase the size of the image if it is smaller than the output size.
- `fill` &mdash; Resizes the image to fit within the width and height boundaries without cropping or distorting the image, and the remaining space is filled with the background color. The resulting image will match the constraining dimensions.
- `stretch` &mdash; Stretches the image to fit the constraining dimensions exactly. The resulting image will fill the dimensions, and will not maintain the aspect ratio of the input image.
- `crop` &mdash; Resizes the image to fill the width and height boundaries and crops any excess image data. The resulting image will match the width and height constraints without distorting the image. See [crop](#api-crop) for more information.

```html
<img src="kayaks.jpg?mark=logo.png&markw=200&markh=200&markfit=crop">
```

### X-Offset &mdash; `markx`
Sets how far the watermark is away from the left and right edges of the image. Set in pixels, or using [relative dimensions](#relative-dimensions). Ignored if `markpos` is set to `center`.

```html
<img src="kayaks.jpg?mark=logo.png&markw=200&markx=20">
```

### Y-Offset &mdash; `marky`
Sets how far the watermark is away from the top and bottom edges of the image. Set in pixels, or using [relative dimensions](#relative-dimensions). Ignored if `markpos` is set to `center`.

```html
<img src="kayaks.jpg?mark=logo.png&markw=200&marky=20">
```

### Padding &mdash; `markpad`
Sets how far the watermark is away from edges of the image. Basically a shortcut for using both markx and marky. Set in pixels, or using [relative dimensions](#relative-dimensions). Ignored if `markpos` is set to `center`.

```html
<img src="kayaks.jpg?mark=logo.png&markw=200&markpad=20">
```

### Position &mdash; `markpos`
Sets where the watermark is positioned. Accepts `top-left`, `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom`, `bottom-right`. Default is `center`.

```html
<img src="kayaks.jpg?mark=logo.png&markpos=top-left">
```

![Mark Position](@images/glide_mark_pos.jpg)

### Alpha &mdash; `markalpha`
Sets the opacity of the watermark. Use values between `0` and `100`, where `100` is fully opaque, and `0` is fully transparent. The default value is `100`.

```html
<img src="kayaks.jpg?mark=logo.png&markalpha=50">
```

![Mark Alpha](@images/glide_mark_alpha.jpg)

---

## Colors

Glide supports a variety of color formats. In addition to the 140 color names supported by all modern browsers (listed below), Glide accepts hexadecimal RGB and RBG alpha formats.

### Hexadecimal
- 3 digit RGB: `CCC`
- 4 digit ARGB (alpha): `5CCC`
- 6 digit RGB: `CCCCCC`
- 8 digit ARGB (alpha): `55CCCCCC`

### Color Names

<div class="collection-method-list" markdown="1">

`aliceblue`
`antiquewhite`
`aqua`
`aquamarine`
`azure`
`beige`
`bisque`
`black`
`blanchedalmond`
`blue`
`blueviolet`
`brown`
`burlywood`
`cadetblue`
`chartreuse`
`chocolate`
`coral`
`cornflowerblue`
`cornsilk`
`crimson`
`cyan`
`darkblue`
`darkcyan`
`darkgoldenrod`
`darkgray`
`darkgreen`
`darkkhaki`
`darkmagenta`
`darkolivegreen`
`darkorange`
`darkorchid`
`darkred`
`darksalmon`
`darkseagreen`
`darkslateblue`
`darkslategray`
`darkturquoise`
`darkviolet`
`deeppink`
`deepskyblue`
`dimgray`
`dodgerblue`
`firebrick`
`floralwhite`
`forestgreen`
`fuchsia`
`gainsboro`
`ghostwhite`
`gold`
`goldenrod`
`gray`
`green`
`greenyellow`
`honeydew`
`hotpink`
`indianred`
`indigo`
`ivory`
`khaki`
`lavender`
`lavenderblush`
`lawngreen`
`lemonchiffon`
`lightblue`
`lightcoral`
`lightcyan`
`lightgoldenrodyellow`
`lightgray`
`lightgreen`
`lightpink`
`lightsalmon`
`lightseagreen`
`lightskyblue`
`lightslategray`
`lightsteelblue`
`lightyellow`
`lime`
`limegreen`
`linen`
`magenta`
`maroon`
`mediumaquamarine`
`mediumblue`
`mediumorchid`
`mediumpurple`
`mediumseagreen`
`mediumslateblue`
`mediumspringgreen`
`mediumturquoise`
`mediumvioletred`
`midnightblue`
`mintcream`
`mistyrose`
`moccasin`
`navajowhite`
`navy`
`oldlace`
`olive`
`olivedrab`
`orange`
`orangered`
`orchid`
`palegoldenrod`
`palegreen`
`paleturquoise`
`palevioletred`
`papayawhip`
`peachpuff`
`peru`
`pink`
`plum`
`powderblue`
`purple`
`rebeccapurple`
`red`
`rosybrown`
`royalblue`
`saddlebrown`
`salmon`
`sandybrown`
`seagreen`
`seashell`
`sienna`
`silver`
`skyblue`
`slateblue`
`slategray`
`snow`
`springgreen`
`steelblue`
`tan`
`teal`
`thistle`
`tomato`
`turquoise`
`violet`
`wheat`
`white`
`whitesmoke`
`yellow`
`yellowgreen`

</div>

## Relative Dimensions
Relative dimensions allow you to specify a width or height value as a percentage of the main image. This is helpful for features like watermarks and borders.

To use a relative dimension, simply provide a percentage as a number (between `0` and `100`), followed by a `w` (width) or `h` (height). For example, `5w` represents 5% of the width of the main image.

```html
<img src="kayaks.jpg?mark=logo.png&markw=5w">
```
