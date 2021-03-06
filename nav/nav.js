function create_menu(basepath)
{
	var base = (basepath == 'null') ? '' : basepath;

	document.write(
		'<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr>' +
		'<td class="td" valign="top">' +

		'<ul>' +
		'<li><a href="'+base+'index.html">Przewodnik użytkownika Home</a></li>' +
		'<li><a href="'+base+'toc.html">Spis treści</a></li>' +
		'</ul>' +

		'<h3>Podstawowe informacje</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/requirements.html">Wymagania sprzętowe</a></li>' +
			'<li><a href="'+base+'license.html">License Agreement</a></li>' +
			'<li><a href="'+base+'changelog.html">Change Log</a></li>' +
			'<li><a href="'+base+'general/credits.html">Credits</a></li>' +
		'</ul>' +

		'<h3>Instalacja</h3>' +
		'<ul>' +
			'<li><a href="'+base+'installation/downloads.html">Pobieranie CodeIgniter</a></li>' +
			'<li><a href="'+base+'installation/index.html">Instrukcja instalacji</a></li>' +
			'<li><a href="'+base+'installation/upgrading.html">Aktualizacja z poprzedniej wersji</a></li>' +
			'<li><a href="'+base+'installation/troubleshooting.html">Rozwiązywanie problemów</a></li>' +
		'</ul>' +

		'<h3>Wstęp</h3>' +
		'<ul>' +
			'<li><a href="'+base+'overview/getting_started.html">Rozpoczęcie pracy</a></li>' +
			'<li><a href="'+base+'overview/at_a_glance.html">CodeIgniter w skrócie</a></li>' +
			'<li><a href="'+base+'overview/cheatsheets.html">CodeIgniter Cheatsheets</a></li>' +
			'<li><a href="'+base+'overview/features.html">Wspierane funkcje</a></li>' +
			'<li><a href="'+base+'overview/appflow.html">Schemat działania aplikacji</a></li>' +
			'<li><a href="'+base+'overview/mvc.html">Model-Widok-Kontroler</a></li>' +
			'<li><a href="'+base+'overview/goals.html">Cele architektury</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Tematy ogólne</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/urls.html">CodeIgniter URLs</a></li>' +
			'<li><a href="'+base+'general/controllers.html">Kontrolery</a></li>' +
			'<li><a href="'+base+'general/reserved_names.html">Zarezerwowane nazwy</a></li>' +
			'<li><a href="'+base+'general/views.html">Widoki</a></li>' +
			'<li><a href="'+base+'general/models.html">Modele</a></li>' +
			'<li><a href="'+base+'general/helpers.html">Helpery</a></li>' +
			'<li><a href="'+base+'general/libraries.html">Korzystanie z bibliotek CodeIgniter</a></li>' +
			'<li><a href="'+base+'general/creating_libraries.html">Creating Your Own Libraries</a></li>' +
			'<li><a href="'+base+'general/drivers.html">Using CodeIgniter Drivers</a></li>' +
			'<li><a href="'+base+'general/creating_drivers.html">Creating Your Own Drivers</a></li>' +
			'<li><a href="'+base+'general/core_classes.html">Creating Core Classes</a></li>' +
			'<li><a href="'+base+'general/hooks.html">Hooks - Extending the Core</a></li>' +
			'<li><a href="'+base+'general/autoloader.html">Automatyczne ładowanie zasobów</a></li>' +
			'<li><a href="'+base+'general/common_functions.html">Common Functions</a></li>' +
			'<li><a href="'+base+'general/routing.html">URI Routing</a></li>' +
			'<li><a href="'+base+'general/errors.html">Obsługa błędów</a></li>' +
			'<li><a href="'+base+'general/caching.html">Caching</a></li>' +
			'<li><a href="'+base+'general/profiling.html">Profiling Your Application</a></li>' +
			'<li><a href="'+base+'general/cli.html">Running via the CLI</a></li>' +
			'<li><a href="'+base+'general/managing_apps.html">Managing Applications</a></li>' +
			'<li><a href="'+base+'general/environments.html">Handling Multiple Environments</a></li>' +
			'<li><a href="'+base+'general/alternative_php.html">Alternative PHP Syntax</a></li>' +
			'<li><a href="'+base+'general/security.html">Bezpieczeństwo</a></li>' +
			'<li><a href="'+base+'general/styleguide.html">PHP Style Guide</a></li>' +
			'<li><a href="'+base+'doc_style/index.html">Tworzenie dokumentacji</a></li>' +
		'</ul>' +

		'<h3>Dodatkowe zasoby</h3>' +
		'<ul>' +
		'<li><a href="http://codeigniter.com/forums/">Community Forums</a></li>' +
		'<li><a href="http://codeigniter.com/wiki/">Community Wiki</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Opisy klas</h3>' +
		'<ul>' +
		'<li><a href="'+base+'libraries/benchmark.html">Benchmarking Class</a></li>' +
		'<li><a href="'+base+'libraries/calendar.html">Calendar Class</a></li>' +
		'<li><a href="'+base+'libraries/cart.html">Cart Class</a></li>' +
		'<li><a href="'+base+'libraries/config.html">Config Class</a></li>' +
		'<li><a href="'+base+'libraries/email.html">Email Class</a></li>' +
		'<li><a href="'+base+'libraries/encryption.html">Encryption Class</a></li>' +
		'<li><a href="'+base+'libraries/file_uploading.html">File Uploading Class</a></li>' +
		'<li><a href="'+base+'libraries/form_validation.html">Form Validation Class</a></li>' +
		'<li><a href="'+base+'libraries/ftp.html">FTP Class</a></li>' +
		'<li><a href="'+base+'libraries/table.html">HTML Table Class</a></li>' +
		'<li><a href="'+base+'libraries/image_lib.html">Image Manipulation Class</a></li>' +
		'<li><a href="'+base+'libraries/input.html">Input Class</a></li>' +
		'<li><a href="'+base+'libraries/javascript.html">Javascript Class</a></li>' +
		'<li><a href="'+base+'libraries/loader.html">Loader Class</a></li>' +
		'<li><a href="'+base+'libraries/language.html">Language Class</a></li>' +
		'<li><a href="'+base+'libraries/output.html">Output Class</a></li>' +
		'<li><a href="'+base+'libraries/pagination.html">Pagination Class</a></li>' +
		'<li><a href="'+base+'libraries/security.html">Security Class</a></li>' +
		'<li><a href="'+base+'libraries/sessions.html">Session Class</a></li>' +
		'<li><a href="'+base+'libraries/trackback.html">Trackback Class</a></li>' +
		'<li><a href="'+base+'libraries/parser.html">Template Parser Class</a></li>' +
		'<li><a href="'+base+'libraries/typography.html">Typography Class</a></li>' +
		'<li><a href="'+base+'libraries/unit_testing.html">Unit Testing Class</a></li>' +
		'<li><a href="'+base+'libraries/uri.html">URI Class</a></li>' +
		'<li><a href="'+base+'libraries/user_agent.html">User Agent Class</a></li>' +
		'<li><a href="'+base+'libraries/xmlrpc.html">XML-RPC Class</a></li>' +
		'<li><a href="'+base+'libraries/zip.html">Zip Encoding Class</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Opisy sterowników</h3>' +
		'<ul>' +
		'<li><a href="'+base+'libraries/caching.html">Caching Class</a></li>' +
		'<li><a href="'+base+'database/index.html">Klasa bazy danych</a></li>' +
		'<li><a href="'+base+'libraries/javascript.html">Javascript Class</a></li>' +
		'</ul>' +

		'<h3>Opisy helperów</h3>' +
		'<ul>' +
		'<li><a href="'+base+'helpers/array_helper.html">Array Helper</a></li>' +
		'<li><a href="'+base+'helpers/captcha_helper.html">CAPTCHA Helper</a></li>' +
		'<li><a href="'+base+'helpers/cookie_helper.html">Cookie Helper</a></li>' +
		'<li><a href="'+base+'helpers/date_helper.html">Date Helper</a></li>' +
		'<li><a href="'+base+'helpers/directory_helper.html">Directory Helper</a></li>' +
		'<li><a href="'+base+'helpers/download_helper.html">Download Helper</a></li>' +
		'<li><a href="'+base+'helpers/email_helper.html">Email Helper</a></li>' +
		'<li><a href="'+base+'helpers/file_helper.html">File Helper</a></li>' +
		'<li><a href="'+base+'helpers/form_helper.html">Form Helper</a></li>' +
		'<li><a href="'+base+'helpers/html_helper.html">HTML Helper</a></li>' +
		'<li><a href="'+base+'helpers/inflector_helper.html">Inflector Helper</a></li>' +
		'<li><a href="'+base+'helpers/language_helper.html">Language Helper</a></li>' +
		'<li><a href="'+base+'helpers/number_helper.html">Number Helper</a></li>' +
		'<li><a href="'+base+'helpers/path_helper.html">Path Helper</a></li>' +
		'<li><a href="'+base+'helpers/security_helper.html">Security Helper</a></li>' +
		'<li><a href="'+base+'helpers/smiley_helper.html">Smiley Helper</a></li>' +
		'<li><a href="'+base+'helpers/string_helper.html">String Helper</a></li>' +
		'<li><a href="'+base+'helpers/text_helper.html">Text Helper</a></li>' +
		'<li><a href="'+base+'helpers/typography_helper.html">Typography Helper</a></li>' +
		'<li><a href="'+base+'helpers/url_helper.html">URL Helper</a></li>' +
		'<li><a href="'+base+'helpers/xml_helper.html">XML Helper</a></li>' +
		'</ul>' +

		'</td></tr></table>');
}