### Localizations for framework.
### All keys must start with `framework` because this file is shared
### among different targets.

framework-validation-required = Dies ist ein Pflichtpfeld.

framework-timeago =
  { $suffix ->
    [ago] hace
    [from now] en
  }
  { $value }
  { $unit ->
    [second] { $value ->
       [1] segundo
      *[other] segundo
    }
    [minuto] { $value ->
       [1] minuto
      *[other] minutos
    }
    [hour] { $value ->
       [0] hora
      *[other] horas
    }
    [day] { $value ->
       [1] dia
      *[other] dias
    }
    [week] { $value ->
       [1] semana
      *[other] semanas
    }
    [year] { $value ->
       [1] año
      *[other] años
    }
    *[other] unknown
  }
