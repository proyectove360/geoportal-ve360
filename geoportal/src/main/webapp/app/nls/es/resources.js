/* See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * Esri Inc. licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define({

    general: {
      cancel: "Cancelar",
      clear: "Limpiar",
      close: "Cerrar",
      del: "Eliminar",
      error: "Error",
      ok: "OK",
      open: "Abrir",
      settings: "Opciones",
      deleting: "Eliminando...",
      updating: "Actualizando...",
      uploading: "Subiendo...",
      working: "...",
      incompatible: "Tu explorador web no es compatible.<br>Por favor, usa uno distinto."
    },

    nav: {
      brand: "Geoportal",
      home: "Inicio",
      search: "Búsqueda",
      catalog: "Catálogo",
      map: "Mapa",
      faq: "Preguntas frecuentes",
      about: "Acerca de nosotros",
      admin: "Administrador",
      content: "Contenido",
      welcomePattern: "{name}",
      signIn: "Entrar",
      signOut: "Salir",
      options: {
        createAccount: "Crear cuenta",
        createMetadata: "Crear Metadata",
        myProfile: "Mi perfil",
        uploadMetadata: "Subir Metadata",
        editFacet: "Editar Faceta"
      }
    },

    login: {
      caption: "Entrar",
      label: "Entrar",
      username: "Usuario",
      password: "Contraseña",
      incomplete: "Se necesita un usuario y una contraseña",
      invalidCredentials: "Credenciales inválidas."
    },

    search: {
      criteria: {
        map: "Mapa",
        timePeriod: "Período de tiempo",
        date: "Fecha",
        paleoDate: "Fecha (Paleo)",
        owner: "Dueño",
        topicCategory: "Tema o categoría",
        metadataType: "Tipo de Metadata",
        organizations: "Organizaciones",
        keywords: "Palabras clave",
        originType: "Tipo de Origen",
        origin: "Fuente de Origen",
        approvalStatus: "Estado de Aprobación",
        access: "Acceso",
        accessGroups: "Acceso a Grupos",
        missingSource: "Editor/Subir",
        createFilter: "Crear Filtro",
        hierarchicalCategory: "Categoría Jerárquica"
      },
      componentSettings: {
        componentLabel: "Etiqueta",
        componentLabelPlaceholder: "",
        reset: "Reiniciar"
      },
      searchBox: {
        search: "Búsqueda",
        searchCatalog: "Búsqueda en el catálogo"
      },
      spatialFilter: {
        label: "Mapa",
        any: "Cualquiera",
        intersects: "Intersección",
        within: "Dentro de",
        countPattern: "{count} centrado(s) aquí",
        settings: {
          caption: "Filtro espacial",
          aggregations: "Agregaciones",
          field: "Campo de capa",
          fieldPlaceholder: "",
          fieldNote: "(para búsqueda, e.g. envelope_geo, shape_geo, envelope_cen_pt)",
          pointField: "Campo de punto",
          pointFieldPlaceholder: "",
          pointFieldNote: "(para agregación, e.g. envelope_cen_pt)"
        }
      },
      temporalFilter: {
        label: "Temporal",
        rangePattern: "{from}..{to}",
        countPattern: "{count} agregado(s) aquí",
        searchTip: "Búsqueda",
        searchLabel: "Consulta:",
        fromLabel: "Desde:",
        toLabel: "Hasta",
        calendarLabel: "Especificar rango de fechas:",
        calendarTitle: "Ingresar intervalo de tiempo",
        interval: {
          year: "Año",
          quarter: "Trimestre",
          month: "Mes",
          week: "Semana",
          day: "Día",
          hour: "Hora",
          minute: "Minuto",
          second: "Segundo"
        },
        settings: {
          caption: "Filtro Temporal",
          field: "Campo de fecha",
          fieldPlaceholder: "",
          toField: "Fecha final",
          toFieldPlaceholder: "",
          mustOperator: "Dentro de",
          nestedPath: "Ruta anidada",
          nestedPathPlaceholder: "",
          interval: "Intervalo",
          intervalPlaceholder: "",
          useUTC: "GMT"
        }
      },
      dateFilter: {
        label: "Fecha",
        labelTimePeriod: "Período de tiempo",
        fromDate: "Desde:",
        toDate: "Hasta:",
        formatHint: "(aaaa-mm-dd)",
        plotTip: "Gráfico",
        plot: {
          beginning: "Fechas iniciales",
          ending: "Fechas finales",
          counts: "Conteo de items",
          noData: "Sin datos",
          rangePattern: "{from} .. {to}"
        }
      },
      numericFilter: {
        label: "Numeric",
        rangePattern: "{from}..{to}",
        countPattern: "{count} agregado(s) aquí",
        searchTip: "Buscar",
        searchLabel: "Consulta:",
        interval: "Intervalo",
        rangeTip: "Especificar rango numérico",
        rangeLabel: "Especificar rango:",
        fromLabel: "Desde:",
        toLabel: "Hasta:",
        applyLabel: "Aplicar",
        settings: {
          caption: "Filtro Numérico",
          field: "Campo Numérico",
          fieldPlaceholder: "",
          interval: "Intervalo",
          intervalPlaceholder: "número > 0",
          ticks: "Ticks",
          ticksPlaceholder: "entero > 0",
          places: "Decimal Places",
          placesPlaceholder: "entero > 0"
        }
      },
      appliedFilters: {
        label: "Filtros",
        myContent: "Mi Contenido",
        clearFilter: "Limpiar",
        clearAll: "Limpiar todo",
        tipPattern: "{type}: {value}"
      },
      results: {
        label: "Resultados",
        noMatch: "No se encontraron resultados.",
        error: "Ha ocurrido un error."
      },
      resultCount: {
        countPattern: "{count} {type}",
        itemSingular: "ítem",
        itemPlural: "ítems",
        userSingular: "usuario",
        userPlural: "usuarios"
      },
      sort: {
        byRelevance: "Por relevancia",
        byTitle: "Por título",
        byDate: "Por fecha",
        asc: "ASC",
        desc: "DESC",
      },
      paging: {
        first: "Primera",
        firstTip: "Primera",
        previous: "Anterior",
        previousTip: "Anterior",
        next: "Siguiente",
        nextTip: "Siguiente",
        last: "Última",
        lastTip: "Última",
        lastTipDisabled: "El resultado excede los ${searchLimit} récords.",
        pagePattern: "{page}",
        countPattern: "{count} ítems"
      },
      termsAggregation: {
        settings: {
          caption: "Agregación de términos",
          field: "Campo",
          fieldPlaceholder: "",
          size: "Tamaño",
          sizePlaceholder: "número > 0",
          minDocCount: "Conteo mínimo",
          minDocCountPlaceholder: "número > 0",
          include: "Incluir",
          includePlaceholder: "filtro",
          exclude: "Excluir",
          excludePlaceholder: "filtro",
          missing: "Faltante",
          missingPlaceholder: "etiqueta",
          order: {
            label: "Orden",
            placeholder: "",
            countAsc: "Conteo - ascendente",
            countDesc: "Conteo - descendente",
            termAsc: "Término - ascendente",
            termDesc: "Término - descendente",
          }
        }
      },
      preview: {
        error: "Error cargando previsualización"
      },
      links: {
        web: "Resultado web",
        atom: "Resultado ATOM",
        rss:  "Resultado RSS",
        json: "Resultado JSON",
        csv:  "Resultado CSV",
        csw:  "Resultado CSW",
        kml:  "Resultado KML",
        dcat: "Resultado DCAT",
        stac: "Resultado STAC"
      }
    },

    item: {
      notAvailable: "N/A",
      actions: {
        html: "HTML",
        xml: "XML",
        json: "JSON",
        links: "Links",
        addToMap: "Agregar al mapa",
        preview: "Previsualizar",
        titleFormat: "${action} - ${title}",
        options: {
          caption: "Opciones",
          editMetadata: "Editar Metadata",
          uploadMetadata: "Subir Metadata"
        },
        urlLinks: {
          thumbnail: "Miniatura",
          website: "Website",
          projectMetadata: "Metadata del proyecto",
          granule: "Granule",
          downloadHTTP: "Descargar (HTTP)",
          downloadFTP: "Descargar (FTP)"
        }
      },
      statusChecker: {
        unknown: "Desconocido",
        status: "Disponibilidad del servicio = ${score}%"
      }
    },

    content: {
      updateButton: "Actualizar",
      applyTo: {
        itemLabel: "Aplicar cambios a este ítem solamente",
        ownerPattern: "Aplicar cambios a todos los ítems que pertenezcan a: {name}",
        sourceUriPattern: "Aplicar cambios a todos los ítems recolectados de: {name}",
        taskRefPattern: "Aplicar cambios a todos los ítems asociados con tarea de recolección: {name}",
        queryPattern: "Aplicar cambios a todos los ítems seleccionados: {count}",
        itemLabelDelete: "Eliminar este ítem solamente",
        ownerPatternDelete: "Eliminar todos los ítems que pertenezcan a: {name}",
        sourceUriPatternDelete: "Eliminar todos los ítems recolectados de: {name}",
        taskRefPatternDelete: "Eliminar todos los ítems asociados con tarea de recolección: {name}",
        queryPatternDelete: "Eliminar cambios a todos los ítems seleccionados: {count}"
      },
      changeOwner: {
        caption: "Cambiar de dueño",
        currentOwner: "Dueño actual:",
        newOwner: "Nuevo dueño:"
      },
      deleteItems: {
        caption: "Eliminar",
      },
      setAccess: {
        caption: "Determinar acceso",
        access: "Acceso",
        _public: "Público",
        _private: "Privado",
        groups: "Compartir con grupos",
        countPattern: "{count} seleccionado(s)"
      },
      setApprovalStatus: {
        caption: "Determinar estado de aprobación",
        status: "Estado",
        none: "None",
        approved: "Aprobada",
        reviewed: "Revisada",
        disapproved: "Desaprobada",
        incomplete: "Incompleta",
        posted: "Publicada",
        draft: "Borrador"
      },
      setField: {
        caption: "Determinar campo",
        tags: {
          caption: "Tags",
          value: "Tags de usuario (delimitado por coma)",
        },
        advanced: {
          caption: "Avanzado",
          prompt: "",
          field: "Nombre del campo",
          value: "Valor",
        }
      },
      uploadMetadata: {
        caption: "Subir metadata",
        button: "Subir"
      }
    },

    metadataEditor: {
      caption: "Metadata",
      loading: "Iniciando editor...",
      filePrompt: "Seleccionar archivo XML.",
      asTemplatePrompt: "Reiniciar identificadores",
      xmlViewOnly: "El tipo de metadata asociada con este ítem no es compatible con el editor."
    },

    errorTranslations: {
      "Tipo de metadata no reconocida.": null,
      "Acceso denegado - no eres dueño.": null,
      "Schematron violation.": null,
      "Id no encontrado.": null,
      "org.xml.sax.SAXParseException; lineNumber: 1; columnNumber: 1; Content is not allowed in prolog.": "No es un archivo XML.",
      "javax.json.stream.JsonParsingException: Invalid JSON": "JSON inválido"
    },

    footer: {
      "copyright": "© Geoportal - VE360",
      "quickLink1": "Quick Link 1",
      "quickLink2": "Quick Link 2"
    },

    about: {
      
      whoweare: "¿Quiénes somos?",
      summary: "VE360 es una organización que busca dar visibilidad a los distintos problemas y desafíos que enfrenta Venezuela haciendo uso de herramientas de ciencia de datos, así como de Sistemas de Información Geográficas (SIG) para generar análisis basados en evidencia. El medio para poder lograr este objetivo es la continua recolección y organización de datos, que transformados en formatos espaciales son los que muestran las realidades concretas en el territorio. De esta forma, entre los mayores logros de la organización se encuentra la acumulación de grandes cantidades de datasets, que en conjunto forman un amplio repositorio de datos geolocalizados.",
      whatwedo: "¿Qué hacemos?",
      what: "Desarrollamos la primera infraestructura geoespacial de Venezuela donde se integran procesos, tecnologías y saberes novedosos de la información geográfica para contribuir con la difusión de datos, análisis y visualizaciones que fomenten el estudio de la realidad social, política, económica y ambiental de Venezuela."
      
    },
    home: {
      
      mines: "Control de minas por grupos irregulares",
      malaria: "Casos de malaria en Bolívar",
      canaima3d: "Visualización 3D de Canaima",
      malariasummary: "Visualización de casos de malaria en el estado Bolívar a nivel de localidad para 2018",
      minessummary: "Visualización de grupos irregulares que controlan minas, puntos de acceso y los cuerpos de seguridad que operan en las cercanías",
      canaimasummary: "Visualización en 3D de la actividad minera dentro y en los alrededores del Parque Nacional Canaima"
    },
    
    explore: {
      
      explore: "Explora",
      explore2: "Explora nuestros datos"
    },

    faqs: {
      
      faq: "Preguntas frecuentes",
      ig: "¿Qué es una infraestructura geoespacial?",
      iganswer: "Las Infraestructuras Geoespaciales (IG) son plataformas que promueven la interoperabilidad y la conexión entre procesos, datos, tecnologías, personas y organizaciones; donde se emplea la información geográfica en su totalidad, desarrollando datos, servicios y flujos de trabajo. ",
      geoportal: "¿Qué es un geoportal?",
      geoportalanswer: "El geoportal es la interfaz por la que navegará el usuario y donde se compila la información espacial, la cual puede estar en forma de datos, mapas, análisis y visualizaciones. ",
      howtouse: "¿Cómo se usa el geoportal?",
      howtouseanswer: "Actualmente las opciones que se podrán encontrar en el geoportal son: En el Catálogo está el listado general de metadata. A través de él se podrán conseguir todas las capas de las que dispone la plataforma y consultar la información detallada sobre cada una. Asimismo, se pueden hacer previsualizaciones en el botón “Previsualizar” y agregar directamente al mapa desde la opción “Agregar al mapa”. En el Mapa se podrán visualizar todas aquellas capas que se hayan agregado desde el catálogo. De esta forma, el mapa contiene un botón que despliega la lista de las seleccionadas y otro que muestra la leyenda. Desde la lista de capas también se puede acceder a la opción “ver en la tabla de atributos”, la cual se abrirá en la parte inferior de la pantalla y donde se podrán observar las variables y los objetos de cada capa.",
      expect: "¿Qué esperar del geoportal?",
      expectanswer: "VE360 pone a disposición de la ciudadanía un geoportal con el objeto de ofrecer información geoespacial que nutra la comprensión del territorio venezolano y los fenómenos que en él ocurren. Además de las capas, se podrán consultar análisis y visualizaciones sobre distintos tópicos. VE360 a través del geoportal busca propiciar el intercambio de información con distintas instituciones y organizaciones interesadas en acercarse más al territorio y geolocalizar sus trabajos, producir mapas, hacer uso de la cartografía, o simplemente exponer sus datos, convirtiendo a la plataforma en un notable centro de almacenamiento de información espacial."
      
    }
});
