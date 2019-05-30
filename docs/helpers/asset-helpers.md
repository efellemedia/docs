# Asset Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`glide`](#method-glide)

</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-glide"></a>
### `glide()`

The `glide` method will pass the given asset through Glide for on-the-fly image manipulation. This method will simply return any cached instance of the resource saving on precious server resources.

The path to your image is relative to the `storage/uploads` directory. This directory is managed by the Assets module.

```php
<img src="{{ glide($asset->location) }}"></img>
```

Glide manipulation options may be passed through as a second parameter as an array.

```php
<img src="{{ glide($asset->location, ['w' => 200, 'h' => 200, 'fit' => 'crop']) }}"></img>
```

#### Glide Manipulation Options
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
