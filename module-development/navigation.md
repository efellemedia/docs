# Navigation

<doc-hero>
Learn how to register and organize your module's control panel navigation items.
</doc-hero>

Its easy to register new links in the control panel sidebar for your module. Registering navigation items should be done either through your `ModuleServiceProvider` or a dedicated service provider.

## Adding Items
Add items by calling the `add()` method off the menu intance. So if we're creating a "Flights" module, we can add a link like so:

```php
public function boot()
{
    $menu = Menu::get('admin');

    $menu->add('Flights')->data([
        'to'    => '/flights',
        'icon'  => 'plane-departure',
    ]);
}
```

Refresh and you should find your newly register navigation item in the sidebar.

## Adding Subitems
If you wish to add subitems under your parent, you may easily do so by chaining your parent item:

```php
public function boot()
{
    $menu = Menu::get('admin');

    $menu->add('Flights')->data([
        'icon'  => 'plane-departure',
    ]);

    $menu->flights->add('All Flights')->data([
        'to' => '/flights',
    ]);

    $menu->flights->add('Arriving')->data([
        'to' => '/flights/arriving',
    ]);

    $menu->flights->add('Departing')->data([
        'to' => '/flights/departing',
    ]);
}
```

When rendering, the CMS will automatically group these items together and create a dropdown with your **parent** acting as the toggle. Note that in these cases, the parent item does not act as a link (and will ignore its `to` data attribute). You will want to regster a subitem to link off to anythin that you have have wanted your parent item to link to.

## Data Attributes
You'll notice that we utilize the `to` and `icon` data attributes when we add a new menu item. Below you will find a complete list of options when adding menu items.

| Attribute | Description |
|-----------|-------------|
| `to` | The link value to the page we wish to navigate to within the control panel. |
| `icon` | Any valid [Font Awesome](https://fontawesome.com/icons?d=gallery) icon name to be rendered. Only parent-level items will display an icon. |
| `order` | The order in which the navigation link should be placed. |