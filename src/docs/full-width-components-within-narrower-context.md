Use **.w-screen** to make any component either span the full width of the screen or have the ability to do so (for components with wrappers like tables).

This approach is a bit hacky and requires using **.w-screen-reset-{{media-query}}** to overwrite on larger screens before setting a new width. Regardless, it's practical not being forced to break **.container**, **.mw7** or **.mw6**, for example. Use with caution.
