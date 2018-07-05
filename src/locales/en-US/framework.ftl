### Localizations for the framework.
### All keys must start with `framework` because this file is shared
### among different targets.

framework-validation-required = This field is required.

framework-timeago =
  { $value ->
    [0] now
    *[other]
      { $value }
      { $unit ->
        [second] { $value ->
          [1] second
          *[other] seconds
        }
        [minute] { $value ->
          [1] minute
          *[other] minutes
        }
        [hour] { $value ->
          [0] hour
          *[other] hours
        }
        [day] { $value ->
          [1] day
          *[other] days
        }
        [week] { $value ->
          [1] week
          *[other] weeks
        }
        [year] { $value ->
          [1] year
          *[other] years
        }
        *[other] unknown
      }
      { $suffix }
  }
