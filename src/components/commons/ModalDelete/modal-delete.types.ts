export type ModalDeleteProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
  handleDelete: () => void;
  loading: boolean;
}