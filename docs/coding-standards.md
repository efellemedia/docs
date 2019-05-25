---
title: Coding Standards
---

# Coding Standards

[[toc]]

---

When contributing code to FusionCMS, you must follow its coding standards. To make a long story short, here is the golden rule: **Imitate the existing FusionCMS codebase**.

Remember that the main advantage of standards is that every piece of code looks and feels familiar, it's not about this or that being more readable.

FusionCMS follows the standards defined in the [PSR-1](http://www.php-fig.org/psr/psr-1/), [PSR-2](http://www.php-fig.org/psr/psr-2/) and [PSR-4](http://www.php-fig.org/psr/psr-4/) documents.

Since a picture - or some code in our case - is worth a thousand words, here's a short example containing most features described below:

```php
<?php

namespace Acme;

class FooBar
{
    const SOME_CONST = 42;

    /**
     * @var string
     */
    private $fooBar;

    /**
     * Create a new FooBar instance.
     *
     * @param string $dummy
     */
    public function __construct($dummy)
    {
        $this->fooBar = $this->transformText($dummy);
    }

    /**
     * @return string
     *
     * @deprecated
     */
    public function someDeprecatedMethod()
    {
        logger()->warning(sprintf('The %s() method is deprecated since version 2.8 and will be removed in 3.0. Use Acme\Baz::someMethod() instead.', __METHOD__));

        return Baz::someMethod();
    }

    /**
     * Transforms the input given as first argument.
     *
     * @param bool|string $dummy
     * @param array       $options
     *
     * @return string|null
     *
     * @throws \RuntimeException
     */
    private function transformText($dummy, array $options = array())
    {
        $defaultOptions = array(
            'some_default'    => 'values',
            'another_default' => 'more values',
        );

        foreach ($options as $option) {
            if (! in_array($option, $defaultOptions)) {
                throw new \RuntimeException(sprintf('Unrecognized option "%s"', $option));
            }
        }

        $mergedOptions = array_merge(
            $defaultOptions,
            $options
        );

        if ($dummy === true) {
            return null;
        }

        if ($dummy === 'string') {
            if ('values' === $mergedOptions['some_default']) {
                return substr($dummy, 0, 5);
            }

            return ucwords($dummy);
        }
    }

    /**
     * Performs some basic check for a given value.
     *
     * @param mixed $value
     * @param bool  $theSwitch
     *
     * @return bool|void The resultant check if $theSwitch isn't false, void otherwise
     */
    private function reverseBoolean($value = null, $theSwitch = false)
    {
        if (! $theSwitch) {
            return;
        }

        return ! $value;
    }
}
```

## Structure
- Add a single space after each comma delimiter;
- Add a single space around binary operators (`==`, `&&`, ...), with the exception of the concatenation (`.`) operator;
- Place unary operators (`!`, `--`, ...) adjacent to the affected variable;
- Always use [identical comparison](http://php.net/manual/en/language.operators.comparison.php) unless you need type juggling;
- Add a coma after each array item in a multi-line array, even after the last one;
- Add a blank line before `return` statements, unless the return is alone inside a statement-group (like an `if` statement);
- Use `return null;` when a function explicitly returns `null` values and use `return;` when the function returns `void` values;
- Use braces to indicate control structure body regardless of the number of statements it contains;
- Define one class per file as concerned by the [PSR-4](http://www.php-fig.org/psr/psr-4/) autoload standards;
- Declare the class inheritance and all the implemented interfaces on the same line as the class name;
- Declare class properties before methods;
- Declare public methods first, then protected ones and finally private ones. The exceptions to this rule are the class constructor and the `setUp()` and `tearDown()` methods of PHPUnit tests, which must always be the first methods to increase readability;
- Declare all the arguments on the same line as the method/function name, no matter how many arguments there are;
- Use parentheses when instantiating classes regardless of the number of arguments the constructor has;
- Do not use `else`, `elseif`, or `break` after `if` and `case` conditions which return or throw something;
- Do not use spaces around `[` offset accessor and before `]` offset accessor.

## Naming Conventions
- Use camelCase, not underscores, for variable, function and method names, arguments;
- Use underscores for option names and parameter names;
- Use namespaces for all classes;
- Use SnakeCase for filenames that are namespaced;
- Use lowercase and underscores for non-namespaced files;
- Don't forget to look at the more verbose [Conventions](#) document for more subjective naming considerations.

## Doc Blocks
- Add PHPDoc blocks for all methods and functions;
- Group annotations together so that annotations of the same type immediately follow each other, and annotations of a different type are separated by a single blank line;
- For type-hinting, use `bool` (instead of `boolean` or `Boolean`), `int` (instead of `integer`), and `float` (instead of `double` or `real`);
- Omit the `@return` tag if the method does not return anything;

```php
/**
 * Register a binding with the container.
 *
 * @param string|array         $abstract
 * @param \Closure|string|null $concrete
 * @param bool                 $shared
 *
 * @throws \Exception
 *
 * @return string|array
 */
public function bind($abstract, $concrete = null, $shared = false)
{
    if (is_null($abstract)) {
        throw new \Exception('Abstract parameter must not be null.');
    }

    if ($shared) {
        return $abstract;
    }

    return [$abstract => $concrete];
}
```
