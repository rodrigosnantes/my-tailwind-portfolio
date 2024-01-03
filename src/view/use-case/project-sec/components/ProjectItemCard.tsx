export default function ProjectItemCard({ image, redirectUrl } : { image: any, redirectUrl: string }) {

  const handleOpen = () => {
    if (!redirectUrl) {
      alert('Náo disponivel')
      return
    }

    const link = document.createElement('a');
    link.setAttribute('href', redirectUrl);
    link.setAttribute('target', '_blank'); // Abre o link em uma nova aba
    link.click();
  }


  return (
    <div
      className="
      w-80
      h-60
      rounded
      shadow-md
      border
      border-dark-border
      hover:bg-dark-pink 
      hover:border-white
      hover:cursor-pointer
      dark:bg-dark-background-card
      dark:hover:bg-dark-pink
      dark:hover:border-dark-pink
      "
      data-aos="fade-down"
      data-aos-duration="1000"
      onClick={handleOpen}
    >
        {image}
    </div>
  );
}
