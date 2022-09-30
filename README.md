# Http Status Görevleri
* HTTP durum kodları (HTTP yanıt kodları), bir web sayfasının barındırıldığı sunucuya, istemciden gönderilen HTTP isteğine yanıt olarak döndürülen kodlara verilen isimdir. Bir tarayıcı (istemci) web sayfasına bağlanmak istediğinde ilgili sayfayı barındıran sunucu, ilgili sayfanın durumu durumu ile alakalı bir cevap (yanıt) döndürür. 
## Http Sınıfları:
* 1XX (100 Kodlu Yanıtlar): 1xx HTTP Durum kodları, kullanıcının bulunduğu isteğin sunucu tarafında devam ettiğinin bildirildiği yanıtlardır. Örneğin HTTP 100 yanıtı isteğin şu anda işlenmekte olduğunun bildirildiği yanıttır. Bu yanıt tarayıcıya iletilir ancak kullanıcı ekranına yansıtılmaz.
* 2xx (200 Kodlu Yanıtlar): 2xx HTTP Durum kodları, tarayıcıdan sayfaya yönelik sunucuya gönderilen işlemin başarılı olduğunun bildirildiği yanıtlardır. HTTP 2xx kodlu yanıtlarda sunucunun tarayıcıdan gelen isteğe başarılı yanıt verdiği ve sayfanın açılabilir olduğu bildirilir. Örneğin http 200 “OK” kodlu yanıtlarda sayfa istek sonrasında kullanıcı tarayıcısında net şekilde görülebilir.
* 3xx (300 Kodlu Yanıtlar): 3xx HTTP durum kodları, tarayıcıdan web sayfasına yönelik sunucuya iletilen isteğin farklı bir sayfaya yönlendirildiğinin bildirildiği yanıtlardır. Yani 3xx durum kodlarına sahip sayfalara yönelik tarayıcıdan bir istek gönderildiğinde sunucu ilgili sayfanın farklı bir sayfaya yönlendirildiğini HTTP 3xx kodlu yanıtlar ile bildirir ve kullanıcıyı yeni sayfaya yönlendirir.
* 4xx (400 Kodlu Yanıtlar): 4xx HTTP durum kodları, kullanıcı kaynaklı bir hatanın gerçekleştiğinin bildirildiği yanıtlardır. Yani HTTP 4xx hata kodlu bir yanıt tarayıcıya gönderildiğinde burada hatanın kaynağının client yani kullanıcı olduğu bildirilir. Ancak burada ki kullanıcı salt tarayıcıdan isteği gönderen kişi olarak algılanmamalıdır. Web sayfasını barındıran sitede uygulanan herhangi bir işlem sonrasında 4xx HTTP hata kodları ortaya çıkabilir.
* 5xx (500 Kodlu Yanıtlar): 5xx HTTP durum kodları, tarayıcıdan gönderilen istek sırasında sunucu kaynaklı bir hatanın ortaya çıktığının iletildiği yanıtlardır.
# HTTP Request'in metodlari  nelerdir? 
* <b>CONNECT</b> metodu hedefteki kaynak tarafından tanımlanan sunucuya bir tünel oluşturur.
* <b>OPTIONS</b> metodu hedefteki kaynağın iletişim seçeneklerini anlamak için kullanılır. (CORS olduğunda diğer domain o fiil var mı şeklinde sorar).
* <b>HEAD</b> metodu GET isteği ile tamamen aynı olan sadece gövdesi olmayan bir yanıt ister.
* <b>TRACE</b> metodu hedefteki kaynağa giden yol boyunca bir mesaj loop-back testi gerçekleştirir.
* <b>GET</b>  metodu belirtilen kaynağın bir temsilini ister. GET kullanan istekler yalnızca veri almalıdır.
* <b>POST</b> metodu belirtilen kaynağa bir varlık (entity) göndermek için kullanılır, bu da genellikle sunucuda bir durum değişikliği ya da yan etkilere neden olur.
* <b>PUT</b> metodu hedefte bulunan kaynağın tüm geçerli temsillerinin yerine istek yükünü (request payload) koyar.
* <b>DELETE</b> metodu belirtilen kaynağı siler.
* <b>PATCH</b> metodu bir kaynağa kısmi değişiklikler uygulamak için kullanılır.

# Fetch API'nin metodlari ile örnekleri
## TEMEL Kullanım
FETCH API’ yi kullanmak için fetch metoduna istek yapacağımız url’ i parametre olarak vermek gerekiyor.
`` fetch(url) ``
fetch() metodundan sonra, metodun sonuna then() promise metodunu ekleriz:
`` .then(function() {}) ``
<<b>ÖRNEK:</b> “https://jsonplaceholder.typicode.com/todos” adresine get isteğinde bulunalım.
`` fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())//parse json data
  .then(function(todos){
    todos.forEach(todo => {
        console.log(todo.title);//Başlıkları console' a yazdırma
    });
}) ``
## POST İsteği Yapma
Rest servisine post isteği yapalım.
`` let payload = {
    title: "Blog Title",
    body: "lorem ipsum", 
    userId:1
  }fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));``
## META Data Kullanımı
Fetch API ile istek yaptığımızda istek yapılan adres bize META datalar gönderir. Bu META dataları console’ a aşağıdaki gibi yazdırabiliriz.
`` fetch('https://jsonplaceholder.typicode.com/posts/1').then(function(response) {  
    console.log(response.headers.get('Content-Type'));  
    console.log(response.headers.get('Date'));
    console.log(response.status);  
    console.log(response.statusText);  
    console.log(response.type);  
    console.log(response.url);  
}); ``
